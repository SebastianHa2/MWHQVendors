return function(){
    let vendors = $getGrid('vendors')
    vendors.forEach(async vendor =>{
        
            await $dgSetRowVals('vendors', vendor.rowKey, {
                select:false
            
        })
    })
}