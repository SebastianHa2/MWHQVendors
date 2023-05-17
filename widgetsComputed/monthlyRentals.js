


return function(email) {
    let items = $getGrid('rentalsInvoices')
    let perRental = this.homeReportPercentage(email).perRent
    let commissionRate = 100 - perRental
    // console.log('items are ', items)

    let recInv= this.recInv(email)

// console.log('month is  here', recInv)

    // console.log(recInv)
    let rental = []
    let pdfRental = []


    let users = $getGrid('users')

    // console.log(email)

    let vendorName
console.log(email)
    users.forEach(user => {
        if(user.rowKey==="gRbVbgXeqEea9mJDOYa0HEfwwaq1"){
            console.log(user)
        }
        if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === email) {
            console.log('user is here, ', user)
            vendorName = user.$group$display
        }
    })

    if(!vendorName) {
        vendorName = 'none'
    }
    
//  console.log(vendorName)


    items.filter(item=>{
        if(item.vendorName === vendorName && item.invoiceMonth===recInv && item.pointofSale!=="MEMBERSHIP_SUBSCRIPTION"){
    //   console.log('item', item)
    console.log(new Date(item.transactionDate?item.transactionDate:'').toLocaleDateString("en-GB"))
        // item.mWHQCommission=item.netRentalPrice*item.mWHQCommissionRate
            item.$transactionDate$display=new Date(item.transactionDate?item.transactionDate:'').toLocaleDateString("en-GB")
            // rental.push(item)
            // let rentalData = {
            //     date: new Date(item.transactionDate).toLocaleDateString("en-GB"),
            //     id: item.transactionID,
            //     name: item.itemName,
            //     sku: item.itemSKU,
            //     ssku: "",
            //     period: item.rentalPeriod,
            //     gross: item.grossRentalPrice,
            //     net: item.netRentalPrice ? parseFloat(item.netRentalPrice).toFixed(2) : '',
            //     comRate: (parseFloat(item.mWHQCommissionRate)*100) ? (parseFloat(item.mWHQCommissionRate)*100).toFixed(2) : '',
            //     commission: parseFloat(item.mWHQCommission)?parseFloat(item.mWHQCommission).toFixed(2):0,
            //     comVat: item.vATonMWHQCommission ? parseFloat(item.vATonMWHQCommission).toFixed(2) : '',
            //     total: item.totalMWHQDeductionsfromGrossSalesPrice ? parseFloat(item.totalMWHQDeductionsfromGrossSalesPrice).toFixed(2) : '',
            //     netbal: parseFloat(item.netBalanceDueToVendor) ? parseFloat(item.netBalanceDueToVendor).toFixed(2) : '',
            //     vendorName: item ? item.vendorName : 'N/A'
            // }
            let mWRent15
            if(item.grossRentalPrice>0){

            mWRent15 = item.grossRentalPrice - 15
            }
            else{
               mWRent15=item.mWRent15
            }
            // if(parseFloat(mWRent15)<0){
            //     mwRent = item.mWRent15
            // }
            console.log(item.mWRent15, "here amount")

            let net = parseFloat(mWRent15) ? parseFloat((parseFloat(mWRent15)/6)*5).toFixed(2) : ''
            let mwRent = parseFloat(mWRent15) ? parseFloat(mWRent15).toFixed(2) : ''
            let commission = parseFloat(mWRent15) ? parseFloat(((parseFloat(mWRent15)/6)*5)*(commissionRate/100)).toFixed(2) : ''
            let comVat = parseFloat(mWRent15) ? parseFloat((((parseFloat(mWRent15)/6)*5)*(commissionRate/100))*0.2).toFixed(2) : ''
            let total = parseFloat(commission)+parseFloat(comVat)
 
            let rentalData = {
                $transactionDate$display: new Date(item.transactionDate).toLocaleDateString("en-GB"),
                transactionID: item.transactionID,
                itemName: item.itemName,
                itemSKU: item.itemSKU,
                rentalPeriod: item.rentalPeriod,
                mWRent15:parseFloat(mwRent),
                netRentalPrice: parseFloat(net),
                mWHQCommissionRate: parseFloat(commissionRate)/100,
                mWHQCommission: parseFloat(commission),
                vATonMWHQCommission: parseFloat(comVat),
                totalMWHQDeductionsfromGrossSalesPrice: parseFloat(commission)+parseFloat(comVat),
                netBalanceDueToVendor: parseFloat(mwRent)-parseFloat(total),
                vendorName: item ? item.vendorName : 'N/A'
            }
            rental.push(rentalData)
        }
    })
    let eRental = rental[0]?rental[0].mWHQCommissionRate:0
    let perRent =100- (eRental*100)
    if(perRent===100){
        perRent=0
    }


    return {rental:rental, pdfRental:pdfRental, perRent:perRent}


}