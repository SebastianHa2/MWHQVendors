return async function() {
    let vendors = $getGrid('newUsers')
 

    vendors.forEach(async (vendor, idx) => {
        if(!vendor.addedToVendors){
            let rowKey = vendor.rowKey
            console.log(vendor)
        setTimeout(async () => {
            await $dgAddRow('vendors', {
                name: vendor.namev,
                email: vendor.email,
                rentalcommissionstructure: vendor.rentalCom,
                salesCommissionStructure: vendor.salesCom
            })
        }, idx*1000)
               let updated = await $dgSetRowVals('newUsers', rowKey, {
          addedToGroups:true
    })  
        }
        

    })
}