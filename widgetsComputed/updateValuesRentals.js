return async function(){
    // first update vendorNames
    this.fillVendorNames('rentals')

    let sales = $getGrid('rentalsInvoices')
    let vendors = $getGrid('vendors')
    let groups = $getGrid('groups')

    sales.forEach(async sale=>{
        if(sale.invoiceMonth==="August" && sale.pointofSale!=="MEMBERSHIP_SUBSCRIPTION"){
         let email
        //  console.log(sale.grossRentalPrice)
        //  if(sale.vendorName==="TheOpulentEdit"){
        //      console.log(sale.name)
        //  }
        //  vendors.forEach(vendor=>{
        //      if(vendor.email===sale.email){
        //          email=vendor.email
        //      }
        //      if(vendor.name==="Ashumi Sanghvi"){
        //          console.log(vendor.name)
        //      }
           
            
        //  })
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
        let perRental = this.homeReportPercentage(email).perRent
        let commissionRate = 100 - perRental
        // console.log(commissionRate)
         let rowKey = sale.rowKey
         let mWRent15 = sale.grossRentalPrice - 15
            let net = parseFloat(mWRent15) ? parseFloat((parseFloat(mWRent15)/6)*5).toFixed(2) : ''
            let mwRent = parseFloat(mWRent15) ? parseFloat(mWRent15).toFixed(2) : ''
            let commission = parseFloat(mWRent15) ? parseFloat(((parseFloat(mWRent15)/6)*5)*(commissionRate/100)).toFixed(2) : ''
            let comVat = parseFloat(mWRent15) ? parseFloat((((parseFloat(mWRent15)/6)*5)*(commissionRate/100))*0.2).toFixed(2) : ''
            let total = parseFloat(commission)+parseFloat(comVat)

            let netRentalPrice = parseFloat(net)
            let mWHQCommissionRate = parseFloat(commissionRate)/100 
            let mWHQCommission = parseFloat(commission)
            let vATonMWHQCommission = parseFloat(comVat)
            let totalMWHQDeductionsfromGrossSalesPrice= parseFloat(commission)+parseFloat(comVat)
            let netBalanceDueToVendor = parseFloat(mwRent)-parseFloat(total)
console.log(mWRent15)
             let updated = await $dgSetRowVals('rentalsInvoices', rowKey, {
            netRentalPrice:netRentalPrice,
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