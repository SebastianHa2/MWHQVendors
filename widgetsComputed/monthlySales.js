
return function(email){
let items = $getGrid('salesInvoices')
let recentInv = this.recInv(email)
  let perRental = this.homeReportPercentage(email).perSale
    let commissionRate = 100 - perRental
let sales = []
let pdfSales=[]

let users = $getGrid('users')

// console.log(email)

let vendorName

users.forEach(user => {
    if(user.$group && user.$group.description && user.$group.description.length > 0 && user.$group.description === email) {
            console.log('user is here, ', user)
            vendorName = user.$group$display
        }
    // if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === email) {

    //     vendorName = user.$group$display
    // }
})


if(!vendorName) {
    vendorName = '  '
}

// console.log('vendor name is, ', vendorName)


// console.log(items)


items.filter(item=>{

    if(item.vendorName == vendorName && item.invoiceMonth===recentInv
){
    // console.log(item)
       item.$transactionDate$display=new Date(item.transactionDate).toLocaleDateString("en-GB")
        // sales.push(item)
        //     let salesData = {
        //     date: new Date(item.transactionDate).toLocaleDateString("en-GB"),
        //     id: item.transactionID,
        //     name: item.itemName,
        //     sku: item.itemSKU,
        //     ssku: "",
        //     gross: item.grossSalesPrice,
        //     net: item.netSalesPrice ? item.netSalesPrice.toFixed(2) : '',
        //     comRate: (item.mWHQCommissionRate*100) ? (item.mWHQCommissionRate*100).toFixed(2) : '',
        //     commission: item.mWHQCommission ? item.mWHQCommission.toFixed(2) : '',
        //     comVat: parseFloat(item.vATonMWHQCommission) ? parseFloat(item.vATonMWHQCommission).toFixed(2) : '',
        //     total: parseFloat(item.totalMWHQDeductionsfromGrossSalesPrice) ? parseFloat(item.totalMWHQDeductionsfromGrossSalesPrice).toFixed(2) : '',
        //     netbal: parseFloat(item.netBalanceDueToVendor) ? parseFloat(item.netBalanceDueToVendor).toFixed(2) : ''
        // }
            let mWRent15 = item.grossSalesPrice
            let net = parseFloat(mWRent15) ? parseFloat((parseFloat(mWRent15)/6)*5).toFixed(2) : ''
            let mwRent = parseFloat(mWRent15) ? parseFloat(mWRent15).toFixed(2) : ''
            let commission = parseFloat(mWRent15) ? parseFloat(((parseFloat(mWRent15)/6)*5)*(commissionRate/100)).toFixed(2) : ''
            let comVat = parseFloat(mWRent15) ? parseFloat((((parseFloat(mWRent15)/6)*5)*(commissionRate/100))*0.2).toFixed(2) : ''
            let total = parseFloat(commission)+parseFloat(comVat)
            let salesData = {
             $transactionDate$display: new Date(item.transactionDate).toLocaleDateString("en-GB"),
                transactionID: item.transactionID,
                itemName: item.itemName,
                itemSKU: item.itemSKU,
                // rentalPeriod: item.rentalPeriod,
                grossSalesPrice:parseFloat(mwRent),
                netSalesPrice: parseFloat(net),
                mWHQCommissionRate: parseFloat(commissionRate)/100,
                mWHQCommission: parseFloat(commission),
                vATonMWHQCommission: parseFloat(comVat),
                totalMWHQDeductionsfromGrossSalesPrice: parseFloat(commission)+parseFloat(comVat),
                netBalanceDueToVendor: parseFloat(mwRent)-parseFloat(total),
                vendorName: item ? item.vendorName : 'N/A'
        }
        sales.push(salesData)
    }
})
let eSale = sales[0]?sales[0].mWHQCommissionRate:0
let perSale =100- (eSale*100)
if(perSale===100){
    perSale=0
}
return {sales:sales, pdfSales:pdfSales, perSale:perSale}

}