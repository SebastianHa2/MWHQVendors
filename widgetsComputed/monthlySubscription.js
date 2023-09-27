return function(email){
let items = $getGrid('rentalsInvoices')
// let currentYear
let recentInv


recentInv = this.recInv(email)


// console.log('name', email)
// if($getUser('selectedYear')){
//     currentYear=$getUser('selectedYear')
// }
// else{
//     currentYear=$getUser('currYear')
// }
//     console.log('herrrree', currentYear)
let sales = []
let pdfSales=[]

let users = $getGrid('users')

// console.log(email)

let vendorName 

users.forEach(user => {
    if(user.$group && user.$group.description && user.$group.description.length > 0 && user.$group.description === email) {
            // console.log('user is here, ', user)
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
          const date = new Date(item.customerDueDate);
          const year = date.getFullYear();
          
    if(item.vendorName == vendorName && item.invoiceMonth===recentInv && item.pointofSale==="MEMBERSHIP_SUBSCRIPTION"){
    //console.log('item to add is, ', item)
       item.$transactionDate$display=new Date(item.transactionDate).toLocaleDateString("en-GB")
        sales.push(item)
            let salesData = {
            date: new Date(item.transactionDate).toLocaleDateString("en-GB"),
            id: item.transactionID,
            name: item.itemName,
            sku: item.itemSKU,
            gross: item.grossRentalPrice,
            net: item.netRentalPrice ? item.netRentalPrice.toFixed(2) : 0,
            comRate: (item.mWHQCommissionRate*100) ? (item.mWHQCommissionRate*100).toFixed(2) : 0,
            commission: item.mWHQCommission ? item.mWHQCommission.toFixed(2) : 0,
            comVat: parseFloat(item.vATonMWHQCommission) ? parseFloat(item.vATonMWHQCommission).toFixed(2) : 0,
            total: parseFloat(item.totalMWHQDeductionsfromGrossSalesPrice) ? parseFloat(item.totalMWHQDeductionsfromGrossSalesPrice).toFixed(2) : 0,
            netbal: item.grossRentalPrice ? parseFloat(item.grossRentalPrice).toFixed(2) : 0
        }
        pdfSales.push(salesData)
    }
})
let eSale = sales[0]?sales[0].mWHQCommissionRate:0
let perSale =100- (eSale*100)
if(perSale===100){
    perSale=0
}
console.log(sales)
return {sales:sales, pdfSales:pdfSales, perSale:perSale}

}