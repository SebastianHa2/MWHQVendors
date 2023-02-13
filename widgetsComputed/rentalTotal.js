return function(email){

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
items.filter(item=>{
    if(item.vendorEmail ===email
){
    comRate = (item.mWHQCommissionRate*100).toFixed(2)
    console.log(comRate)
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

        rental.push(item)
        rentalNet += item.netRentalPrice
        MWHQcom += item.mWHQCommission




    }
})
total={
    totalRate:comRate,
    totalItem:rental.length,
    totalNet:rentalNet,
    totalMWHQcom: MWHQcom.toFixed(2),
    totalVat: vatRental.toFixed(2),
    totalGross: grossRental.toFixed(2),
    totalBalance: netBalance.toFixed(2)
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