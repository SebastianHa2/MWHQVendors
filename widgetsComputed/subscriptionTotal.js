return function(email){
// let recentInv = this.recInv(email)
let recentInv


recentInv = this.recInv(email)

// let currentYear
// if($getUser('selectedYear')){
//     currentYear=$getUser('selectedYear')
// }
// else{
//     currentYear=$getUser('currYear')
// }
// console.log(recentInv)
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
    // if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === email) {
    //     // console.log('user is, ', user)
    //     vendorName = user.$group$display
    // }
    if(user.$group && user.$group.description && user.$group.description.length > 0 && user.$group.description === email) {
            // console.log('user is here, ', user)
            vendorName = user.$group$display
        }
})

if(!vendorName) {
    vendorName = 'none'
}





items.filter(item=>{
     const date = new Date(item.customerDueDate);
         const year = date.getFullYear();
    if(item.vendorName === vendorName && item.invoiceMonth===recentInv && item.pointofSale==="MEMBERSHIP_SUBSCRIPTION"
){
    comRate = (parseFloat(item.mWHQCommissionRate)*100) ? (parseFloat(item.mWHQCommissionRate)*100).toFixed(2) :0
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
if(item.grossRentalPrice
){
    grp += parseFloat(item.grossRentalPrice)

}

        rental.push(item)
        rentalNet += parseFloat(item.netRentalPrice)
        MWHQcom += parseFloat(item.mWHQCommission)




    }
})
total={
    totalRate:comRate,
    totalItem:rental.length,
    totalNet:'0.00',
    totalMWHQcom: '0.00',
    totalVat: vatRental.toFixed(2),
    totalGross: grossRental.toFixed(2),
    totalBalance: grp.toFixed(2),
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