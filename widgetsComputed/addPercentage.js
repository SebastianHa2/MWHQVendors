let vendors = $getGrid('vendors')
let per = $getGrid('percentage')

vendors.forEach(item=>{
    per.forEach(elem=>{
        if(item.email===elem.emailAddress){
            $dgSetRowVals('vendors', item.rowKey, {rentalcommissionstructure: elem.rentalCommissionStructure})
            $dgSetRowVals('vendors', item.rowKey, {salesCommissionStructure: elem.salesCommissionStructure})
            
        }
    })
})