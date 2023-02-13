let os = require('os')
let fs = require('fs')


// Delete processed work order if it already exists
// The ID of your GCS bucket
const bucketName = 'tangle-157402-processed';

// The ID of your GCS file
const fileName = `${context.payload.rowKey}.pdf`;

async function deleteFile() {
    const options = {
    };

    try {
        const storageFile = bucket(bucketName).file(fileName);
        storageFile
        .exists()
        .then(async (exists) => {
            if (exists[0]) {
                await admin.storage().bucket(bucketName).file(fileName).delete(options);
            } else {
            $log("File does not exist");
        }
    })
    } catch(err) {
        $log('Not found a file to delete / maybe its first time')
    }
}

await deleteFile().catch(console.error);




// Retrieve the mapping file  
const files = await getFilesDataFromRecord({
    workspaceId: '-NLvDXaAsLMKE7dEZj5z',
    gridId: 'reportTemplates',
    rowKey: '-NM9DwD9iaQuT3e38XNv',
    cellKey: 'template',
})

let templateData = files[0].data[0]

fs.writeFileSync(os.tmpdir()+'/empty-template.docx', templateData);

// Load the docx file as binary content
const content = fs.readFileSync(os.tmpdir()+'/empty-template.docx');

const zip = new PizZip(content);

const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
});

$log.debug('file template')

context.data.dataToFill = {
    ...context.payload.neededData,
    polines: context.payload.purchaseLines ? context.payload.purchaseLines : [],
    podeliveries: context.payload.purchaseDeliveries ? context.payload.purchaseDeliveries : []
}

doc.render({
    ...context.payload.neededData,
    polines: context.payload.purchaseLines ? context.payload.purchaseLines : [],
    podeliveries: context.payload.purchaseDeliveries ? context.payload.purchaseDeliveries : []
});

$log.debug('doc rendered')

const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
});



    fs.writeFileSync(os.tmpdir()+`/${context.payload.rowKey}.docx`, buf);



    let base64str = Buffer.from(buf).toString('base64')

    const bucket = admin.storage().bucket('tanglestaging-84686-upload')

    bucket.upload(os.tmpdir()+`/${context.payload.rowKey}.docx`).then(function(data) {
        const file = data[0]
    })

    await new Promise(resolve => {
setTimeout(async () => {

        

        // The path to which the file should be downloaded
        const destFileName = os.tmpdir()+ '/' + context.payload.name;

        async function downloadFile() {
            const options = {
                destination: destFileName,
            };

            // Downloads the file to the destination file path
            await admin.storage().bucket(bucketName).file(fileName).download(options);

        }

        await downloadFile().catch(console.error);



            let pdfFile = fs.readFileSync(os.tmpdir() + '/' + context.payload.name);

            let newRow = await $addRow('printedDocuments', {
                name: context.payload.name,
                datePrinted: new Date(),
                purchaseOrder: context.payload.rowKey
            })

            context.data.newrowprinteddocs = newRow

            let templatesArr = []
            templatesArr.push({
                name: context.payload.name,
                data: pdfFile
            })

            await uploadFilesToRecord({
                workspaceId: '-N0elSAMSwZqbX7xzRXz',
                gridId: 'printedDocuments',
                rowKey: newRow,
                cellKey: 'files',
                files: templatesArr,
            })

            $log.debug('file ready')


            context.data.success = 'file created'
            resolve()

        }, 8000)
})