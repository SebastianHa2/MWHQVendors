return async function(){
let itemsR = await $getGrid('rentalsInvoices')
let itemsS = await $getGrid('salesInvoices')
let netBalance = 0
let replay = false
let replayS = false
let replaySS = false
let replaySSS = false
let arrayOFVendors = []
let nameAndEmail = []
let arrayOFVendorsS = []
let nameAndEmailS =[]
let vendorsToAdd = []
let nameAndEmailStoAdd = []



itemsR.filter(item=>{
    if(arrayOFVendors.length>0){
        for(let i = 0; i<arrayOFVendors.length; i++){
            if(arrayOFVendors[i]===item.vendorEmail){
                replay=true
            }
            
        }
    }
    if(!replay){

arrayOFVendors.push(item.vendorEmail)
nameAndEmail.push({email:item.vendorEmail, name:item.acc})
    }

    replay=false
})
itemsS.filter(item=>{
    if(arrayOFVendorsS.length>0){
        for(let i = 0; i<arrayOFVendorsS.length; i++){
            if(arrayOFVendorsS[i]===item.vendorEmail){
                replayS=true
            }
            
        }
    }
    if(!replayS){

arrayOFVendorsS.push(item.vendorEmail)
nameAndEmailS.push({email:item.vendorEmail, name:item.acc})
    }

    replayS=false
})

console.log(arrayOFVendors)
console.log(arrayOFVendorsS)

arrayOFVendorsS.filter(item=>{
    if(arrayOFVendors.length>0){
        for(let i = 0; i<arrayOFVendors.length; i++){
            if(arrayOFVendors[i]===item){
                replaySS=true
            }
            
        }
    }
    if(!replaySS){

vendorsToAdd.push(item)
    }

    replaySS=false
})
nameAndEmailS.filter(item=>{
    if(nameAndEmailS.length>0){
        for(let i = 0; i<nameAndEmail.length; i++){
            if(nameAndEmail[i].email===item.email){
                replaySSS=true
            }
            
        }
    }
    if(!replaySSS){

nameAndEmailStoAdd.push(item)
    }

    replaySSS=false
})
console.log([...vendorsToAdd, ...arrayOFVendors])
$setUser('vendorsEmail', [...vendorsToAdd, ...arrayOFVendors])
$setUser('dataVendorsTable', [...nameAndEmail, ...nameAndEmailStoAdd])
console.log($getUser('dataVendorsTable'))
let emails = $getUser('dataVendorsTable')
emails.forEach((item, index) =>{
   setTimeout(async () => {
    let newRow = await $dgAddRow('vendors', {
        name:item.name,
        email:item.email
    })
       
   }, 10*index)
})
}