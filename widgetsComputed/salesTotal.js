return function(email){
let recentInv = this.recInv(email)
let items = $getGrid('salesInvoices')
let rental = []
let total 
let pdfSalesTotal = []
let rentalNet = 0
let MWHQcom = 0
let vatRental = 0
let grossRental = 0
let netBalance = 0
let comRate= 0
let grp = 0

let users = $getGrid('users')

// console.log(email)

let vendorName

users.forEach(user => {
    if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === email) {
        console.log('user is, ', user)
        vendorName = user.$group$display
    }
})

if(!vendorName) {
    vendorName = 'none'
}

items.filter(item=>{
    
    if(item.vendorName === vendorName && item.invoiceMonth===recentInv
){
    console.log('found item', vendorName)
    console.log(item.grossSalesPrice)
    comRate = (item.mWHQCommissionRate*100) ? (item.mWHQCommissionRate*100).toFixed(2) : ''
if(item.vATonMWHQCommission){
    vatRental += item.vATonMWHQCommission
}
if(item.totalMWHQDeductionsfromGrossSalesPrice
){
    grossRental += item.totalMWHQDeductionsfromGrossSalesPrice
}
if(item.netBalanceDueToVendor
){
    netBalance += item.netBalanceDueToVendor

}
if(item.grossSalesPrice
){
    grp +=item.grossSalesPrice

}

        rental.push(item)
        rentalNet += item.netSalesPrice
        MWHQcom += item.mWHQCommission



    }
})
total={
    totalRate:comRate,
    totalItem:rental.length,
    totalNet:rentalNet.toFixed(2),
    totalMWHQcom: MWHQcom.toFixed(2),
    totalVat: vatRental.toFixed(2),
    totalGross: grossRental.toFixed(2),
    totalBalance: netBalance.toFixed(2),
    totalGrossSalesPrice:grp.toFixed(2)

}
pdfTotal={
    totalItems:total.totalItem,
    netTotal:total.totalNet,
    commissionTotal:total.totalMWHQcom,
    comVatTotal:total.totalVat,
    totalTotal:total.totalGross,
    netbalTotal:total.totalBalance
}
pdfSalesTotal.push(pdfTotal)


return {total:total, pdfSalesTotal:pdfSalesTotal}
}