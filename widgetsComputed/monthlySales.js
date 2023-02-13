
return function(email){
let items = $getGrid('salesInvoices')

let sales = []
let pdfSales=[]
items.filter(item=>{
   
    if(item.vendorEmail ===email
){
       item.$transactionDate$display=new Date(item.transactionDate).toLocaleDateString("en-GB")
        sales.push(item)
            let salesData = {
            date: new Date(item.transactionDate).toLocaleDateString("en-GB"),
            id: item.transactionID,
            name: item.itemName,
            sku: item.itemSKU,
            ssku: "",
            gross: item.grossSalesPrice,
            net: item.netSalesPrice.toFixed(2),
            comRate: (item.mWHQCommissionRate*100).toFixed(2),
            commission: item.mWHQCommission.toFixed(2),
            comVat: parseFloat(item.vATonMWHQCommission).toFixed(2),
            total: parseFloat(item.totalMWHQDeductionsfromGrossSalesPrice).toFixed(2),
            netbal: parseFloat(item.netBalanceDueToVendor).toFixed(2)
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