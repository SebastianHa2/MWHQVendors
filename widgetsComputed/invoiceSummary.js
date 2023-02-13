
const saleTotal = this.salesTotal ? this.salesTotal.pdfSalesTotal : 0
const rentTotal = this.rentalTotal ? this.rentalTotal.pdfRentalTotal : 0

let pdfSummary = {
    mwRental: rentTotal[0] ? rentTotal[0].commissionTotal : 0,
    vendorRental: rentTotal[0] ? rentTotal[0].netbalTotal : 0,
    mwSale: saleTotal[0] ? saleTotal[0].commissionTotal : 0,
    vendorSale: saleTotal[0] ? saleTotal[0].netbalTotal : 0,
    mwReturn: 0,
    vendorReturn:0,
    mwSubTotal: parseFloat(rentTotal[0] ? rentTotal[0].commissionTotal : 0) + parseFloat(saleTotal[0] ? saleTotal[0].commissionTotal : 0),
    vendorSubTotal: parseFloat(rentTotal[0] ? rentTotal[0].netbalTotal : 0) + parseFloat(saleTotal[0] ? saleTotal[0].netbalTotal : 0),
    mwVat: parseFloat(rentTotal[0] ? rentTotal[0].comVatTotal : 0) + parseFloat(saleTotal[0] ? saleTotal[0].comVatTotal : 0),
    mwTotal: parseFloat(rentTotal[0] ? rentTotal[0].commissionTotal : 0) + parseFloat(saleTotal[0] ? saleTotal[0].commissionTotal : 0) + parseFloat(rentTotal[0] ? rentTotal[0].comVatTotal : 0) + parseFloat(saleTotal[0] ? saleTotal[0].comVatTotal : 0),
    vendorTotal: parseFloat(rentTotal[0] ? rentTotal[0].netbalTotal : 0) + parseFloat(saleTotal[0] ? saleTotal[0].netbalTotal : 0)

}
console.log(pdfSummary)
return pdfSummary

