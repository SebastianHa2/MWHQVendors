return async function(){
    // first update vendorNames
    this.fillVendorNames('sales')

    let sales = $getGrid('salesInvoices')
    let vendors = $getGrid('vendors')
    let groups = $getGrid('groups')

    sales.forEach(async sale=>{
        if(sale.invoiceMonth==="August"){
         let email
        //  if(sale.vendorName==="TheOpulentEdit"){
        //      console.log(sale.name)
        //  }
         vendors.forEach(vendor=>{
             if(vendor.name===sale.name || vendor.name===sale.vendorName){
                 email=vendor.email
             }
            //  if(vendor.name==="Ashumi Sanghvi"){
            //      console.log(vendor.name)
            //  }
         })
            
            if(!email){
            if(sale.vendorName){
        //   console.log(sale.vendorName)
        groups.forEach(vendor=>{
            if(vendor.name===sale.vendorName){
                // console.log(vendor)
                email=vendor.description
            }
                // email=vendor.description
            
        })
        }

            }
         console.log(email)
         if(email){
        let perRental = this.homeReportPercentage(email).perSale
        let commissionRate = 100 - perRental
        // console.log(commissionRate)
         let rowKey = sale.rowKey
         let mWRent15 = sale.grossSalesPrice
            let net = parseFloat(mWRent15) ? parseFloat((parseFloat(mWRent15)/6)*5).toFixed(2) : ''
            let mwRent = parseFloat(mWRent15) ? parseFloat(mWRent15).toFixed(2) : ''
            let commission = parseFloat(mWRent15) ? parseFloat(((parseFloat(mWRent15)/6)*5)*(commissionRate/100)).toFixed(2) : ''
            let comVat = parseFloat(mWRent15) ? parseFloat((((parseFloat(mWRent15)/6)*5)*(commissionRate/100))*0.2).toFixed(2) : ''
            let total = parseFloat(commission)+parseFloat(comVat)

            let netSalesPrice = parseFloat(net)
            let mWHQCommissionRate = parseFloat(commissionRate)/100 
            let mWHQCommission = parseFloat(commission)
            let vATonMWHQCommission = parseFloat(comVat)
            let totalMWHQDeductionsfromGrossSalesPrice= parseFloat(commission)+parseFloat(comVat)
            let netBalanceDueToVendor = parseFloat(mwRent)-parseFloat(total)
console.log(mWRent15)
             let updated = await $dgSetRowVals('salesInvoices', rowKey, {
            netSalesPrice:netSalesPrice,
            netBalanceDueToVendor:netBalanceDueToVendor,
            mWHQCommission:mWHQCommission,
            vATonMWHQCommission:vATonMWHQCommission,
            mWHQCommissionRate:mWHQCommissionRate,
            totalMWHQDeductionsfromGrossSalesPrice:totalMWHQDeductionsfromGrossSalesPrice
    })  
         }
        }
    })
}