
return function(email){
let items = $getGrid('salesInvoices')
let recentInv = this.recInv(email)

let sales = []
let pdfSales=[]

let users = $getGrid('users')

console.log(email)

let vendorName

users.forEach(user => {
    if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === email) {

        vendorName = user.$group$display
    }
})


if(!vendorName) {
    vendorName = '  '
}

console.log('vendor name is, ', vendorName)


console.log(items)


items.filter(item=>{

    if(item.vendorName == vendorName && item.invoiceMonth===recentInv
){
    console.log(item)
       item.$transactionDate$display=new Date(item.transactionDate).toLocaleDateString("en-GB")
        sales.push(item)
            let salesData = {
            date: new Date(item.transactionDate).toLocaleDateString("en-GB"),
            id: item.transactionID,
            name: item.itemName,
            sku: item.itemSKU,
            ssku: "",
            gross: item.grossSalesPrice,
            net: item.netSalesPrice ? item.netSalesPrice.toFixed(2) : '',
            comRate: (item.mWHQCommissionRate*100) ? (item.mWHQCommissionRate*100).toFixed(2) : '',
            commission: item.mWHQCommission ? item.mWHQCommission.toFixed(2) : '',
            comVat: parseFloat(item.vATonMWHQCommission) ? parseFloat(item.vATonMWHQCommission).toFixed(2) : '',
            total: parseFloat(item.totalMWHQDeductionsfromGrossSalesPrice) ? parseFloat(item.totalMWHQDeductionsfromGrossSalesPrice).toFixed(2) : '',
            netbal: parseFloat(item.netBalanceDueToVendor) ? parseFloat(item.netBalanceDueToVendor).toFixed(2) : ''
        }
        pdfSales.push(salesData)
    }
})
let eSale = sales[0]?sales[0].mWHQCommissionRate:0
let perSale =100- (eSale*100)
if(perSale===100){
    perSale=0
}
return {sales:sales, pdfSales:pdfSales, perSale:perSale}

}