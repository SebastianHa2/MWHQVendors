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

  let perRental = this.homeReportPercentage(email).perSale
  let commissionRate = 100 - perRental


let users = $getGrid('users')

// console.log(email)

let vendorName

users.forEach(user => {
    if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === email) {
        // console.log('user is, ', user)
        vendorName = user.$group$display
    }
})

if(!vendorName) {
    vendorName = 'none'
}

items.filter(item=>{
    
    if(item.vendorName === vendorName && item.invoiceMonth===recentInv
){
    // console.log('found item', vendorName)
    // console.log(item.grossSalesPrice)
//     comRate = (item.mWHQCommissionRate*100) ? (item.mWHQCommissionRate*100).toFixed(2) : ''
// if(item.vATonMWHQCommission){
//     vatRental += item.vATonMWHQCommission
// }
// if(item.totalMWHQDeductionsfromGrossSalesPrice
// ){
//     grossRental += item.totalMWHQDeductionsfromGrossSalesPrice
// }
// if(item.netBalanceDueToVendor
// ){
//     netBalance += item.netBalanceDueToVendor

// }
// if(item.grossSalesPrice
// ){
//     grp +=item.grossSalesPrice

// }

//         rental.push(item)
//         rentalNet += item.netSalesPrice
//         MWHQcom += item.mWHQCommission

      let mWRent15 = item.grossSalesPrice 
            let net = parseFloat(mWRent15) ? parseFloat((parseFloat(mWRent15)/6)*5).toFixed(2) : ''
            let mwRent = parseFloat(mWRent15) ? parseFloat(mWRent15).toFixed(2) : ''
            let commission = parseFloat(mWRent15) ? parseFloat(((parseFloat(mWRent15)/6)*5)*(commissionRate/100)).toFixed(2) : ''
            let comVat = parseFloat(mWRent15) ? parseFloat((((parseFloat(mWRent15)/6)*5)*(commissionRate/100))*0.2).toFixed(2) : ''
            let total = parseFloat(commission)+parseFloat(comVat)
    comRate = commissionRate ? parseFloat(commissionRate).toFixed(2) : ''
    // console.log(comRate)
if(comVat){
    vatRental += parseFloat(comVat)
}
if(total
){
    grossRental += parseFloat(total)
}
if(mwRent && total
){
    netBalance += parseFloat(mwRent)-parseFloat(total)

}
if(mwRent
){
    grp += parseFloat(mwRent)

}

        rental.push(item)
        rentalNet += parseFloat(net)
        MWHQcom += parseFloat(commission)



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