return function(email){
let recentInv = this.recInv(email)
let items =$getGrid('rentalsInvoices')
let rental = []
let total 
let pdfRentalTotal=[]
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
    if(item.vendorName ===vendorName && item.invoiceMonth===recentInv
){
    comRate = (parseFloat(item.mWHQCommissionRate)*100) ? (parseFloat(item.mWHQCommissionRate)*100).toFixed(2) : ''
    // console.log(comRate)
if(item.vATonMWHQCommission){
    vatRental += parseFloat(item.vATonMWHQCommission)
}
if(item.totalMWHQDeductionsfromGrossSalesPrice
){
    grossRental += parseFloat(item.totalMWHQDeductionsfromGrossSalesPrice)
}
if(item.netBalanceDueToVendor
){
    netBalance += parseFloat(item.netBalanceDueToVendor)

}
if(item.mWRent15
){
    grp += parseFloat(item.mWRent15)

}

        rental.push(item)
        rentalNet += parseFloat(item.netRentalPrice)
        MWHQcom += parseFloat(item.mWHQCommission)




    }
})
total={
    totalRate:comRate,
    totalItem:rental.length,
    totalNet:rentalNet,
    totalMWHQcom: MWHQcom.toFixed(2),
    totalVat: vatRental.toFixed(2),
    totalGross: grossRental.toFixed(2),
    totalBalance: netBalance.toFixed(2),
    totalGrossRentalPrice:grp.toFixed(2)
}
pdfTotal={
    totalItems:total.totalItem,
    netTotal:total.totalNet,
    commissionTotal:total.totalMWHQcom,
    comVatTotal:total.totalVat,
    totalTotal:total.totalGross,
    netbalTotal:total.totalBalance
}
pdfRentalTotal.push(pdfTotal)

return {total:total, pdfRentalTotal:pdfRentalTotal}

}