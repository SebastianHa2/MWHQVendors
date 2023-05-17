return async function() {
    let vendors = $getGrid('newUsers')
 
  vendors.forEach(async (vendor, idx) => {
        if(!vendor.addedToGroups){
            let rowKey = vendor.rowKey
            console.log(vendor)
        setTimeout(async () => {
            await $dgAddRow('groups', {
                name: vendor.vendorname,
                description: vendor.email
            })
        }, idx*1000)
             let updated = await $dgSetRowVals('newUsers', rowKey, {
          addedToGroups:true
    })  
        }

    })
 
}