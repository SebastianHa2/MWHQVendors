let os = require('os')
let fs = require('fs')
// Delete processed work order if it already exists
// The ID of your GCS bucket
const bucketName = 'tangle-157402-processed';
// The ID of your GCS file
const fileName = `${context.payload.vendorName}.pdf`;
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
// await deleteFile().catch(console.error);
// Retrieve the mapping file  
const files = await getFilesDataFromRecord({
    workspaceId: '-NLvDXaAsLMKE7dEZj5z',
    gridId: 'reportTemplates',
    rowKey: context.payload.template,
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
    ...context.payload
}
doc.render({
    ...context.payload
});
$log.debug('doc rendered')
const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
});
    fs.writeFileSync(os.tmpdir()+`/${context.payload.vendorName}.docx`, buf);
    let base64str = Buffer.from(buf).toString('base64')
    const bucket = admin.storage().bucket('tangle-157402-upload')
    bucket.upload(os.tmpdir()+`/${context.payload.vendorName}.docx`).then(function(data) {
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
          
           let pdfEmail = pdfFile.toString('base64')
         
            context.pdf=pdfEmail
            $log.debug('file ready')
            context.data.success = 'file created'
            resolve()
        }, 8000)
})