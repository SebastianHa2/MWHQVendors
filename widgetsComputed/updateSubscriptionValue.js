return async function(){
    // first update vendorNames
    this.fillVendorNames('rentals')

    let sales = $getGrid('rentalsInvoices')
    let vendors = $getGrid('vendors')
    let groups = $getGrid('groups')

    sales.forEach(async sale=>{
        if(sale.invoiceMonth==="August" && sale.pointofSale==="MEMBERSHIP_SUBSCRIPTION"){
         let email
      
        if(sale.vendorName){
          console.log(sale.vendorName)
        groups.forEach(vendor=>{
            if(vendor.name===sale.vendorName){
                console.log(vendor)
                email=vendor.description
            }
                // email=vendor.description
            
        })
        }
        // email=sale.vendorEmail
         console.log(email)
         if(email){
      
        // console.log(commissionRate)
         let rowKey = sale.rowKey
         let netAmount = sale.netAmount
        
            let netBalanceDueToVendor = netAmount
console.log(netAmount)
             let updated = await $dgSetRowVals('rentalsInvoices', rowKey, {
            netBalanceDueToVendor:netBalanceDueToVendor
            
    })  
         }
        }
    })
}