


return function(email) {
    let items = $getGrid('rentalsInvoices')

    console.log('items are ', items)


    let rental = []
    let pdfRental = []
    items.filter(item=>{
        if(item.vendorEmail ===email
    ){
        console.log('item is, ', item)
    console.log(new Date(item.transactionDate?item.transactionDate:'').toLocaleDateString("en-GB"))
        // item.mWHQCommission=item.netRentalPrice*item.mWHQCommissionRate
            item.$transactionDate$display=new Date(item.transactionDate?item.transactionDate:'').toLocaleDateString("en-GB")
            rental.push(item)
            let rentalData = {
                date: new Date(item.transactionDate).toLocaleDateString("en-GB"),
                id: item.transactionID,
                name: item.itemName,
                sku: item.itemSKU,
                ssku: "",
                period: item.rentalPeriod,
                gross: item.grossRentalPrice,
                net: item.netRentalPrice.toFixed(2),
                comRate: (item.mWHQCommissionRate*100).toFixed(2),
                commission: item.mWHQCommission?item.mWHQCommission.toFixed(2):0,
                comVat: parseFloat(item.vATonMWHQCommission).toFixed(2),
                total: parseFloat(item.totalMWHQDeductionsfromGrossSalesPrice).toFixed(2),
                netbal: item.netBalanceDueToVendor.toFixed(2),
                vendorName: item ? item.acc : 'N/A'
            }
            
            pdfRental.push(rentalData)
        }
    })
    let eRental = rental[0]?rental[0].mWHQCommissionRate:0
    let perRent =100- (eRental*100)
    if(perRent===100){
        perRent=0
    }

    return {rental:rental, pdfRental:pdfRental, perRent:perRent}


}