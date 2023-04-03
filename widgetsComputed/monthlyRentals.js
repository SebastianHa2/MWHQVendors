


return function(email) {
    let items = $getGrid('rentalsInvoices')

    // console.log('items are ', items)

    let recInv= this.recInv(email)



    // console.log(recInv)
    let rental = []
    let pdfRental = []


    let users = $getGrid('users')

    console.log(email)

    let vendorName

    users.forEach(user => {
        if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === email) {
            //console.log('user is, ', user)
            vendorName = user.$group$display
        }
    })

    if(!vendorName) {
        vendorName = 'none'
    }
    
 


    items.filter(item=>{
        if(item.vendorName === vendorName && item.invoiceMonth===recInv
    ){
      
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
                net: item.netRentalPrice ? parseFloat(item.netRentalPrice).toFixed(2) : '',
                comRate: (parseFloat(item.mWHQCommissionRate)*100) ? (parseFloat(item.mWHQCommissionRate)*100).toFixed(2) : '',
                commission: parseFloat(item.mWHQCommission)?parseFloat(item.mWHQCommission).toFixed(2):0,
                comVat: item.vATonMWHQCommission ? parseFloat(item.vATonMWHQCommission).toFixed(2) : '',
                total: item.totalMWHQDeductionsfromGrossSalesPrice ? parseFloat(item.totalMWHQDeductionsfromGrossSalesPrice).toFixed(2) : '',
                netbal: parseFloat(item.netBalanceDueToVendor) ? parseFloat(item.netBalanceDueToVendor).toFixed(2) : '',
                vendorName: item ? item.vendorName : 'N/A'
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