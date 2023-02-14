return async function(item){
 try {
let paydate = this.paymentDate('December')
     console.log(item)

     $setGlobalModel('sendingEmail', true)
 let items = await $getGrid('rentalsInvoices')
 let itemsS = await $getGrid('salesInvoices')
 let ts = []
 let totalItemsR = 0
 let netTotalR = 0
 let commissionTotalR = 0
 let commissionRateTotalR = 0
 let comVatTotalR= 0
 let totalTotalR = 0
 let netbalTotalR = 0
 let vendorName = item.name
 let earnRent = 0
 let earnSale = 0
 items.filter(elem=>{
    if(elem.vendorEmail === item.email) {
console.log(elem)
    // item.mWHQCommission=item.netRentalPrice*item.mWHQCommissionRate
        elem.$transactionDate$display=new Date(elem.transactionDate).toLocaleDateString("en-GB")
      
        let rentalData = {
            date: new Date(elem.transactionDate).toLocaleDateString("en-GB"),
            id: elem.transactionID ? elem.transactionID : '',
            name: elem.itemName,
            sku: elem.itemSKU,
            ssku: "",
            period: elem.rentalPeriod,
            gross: elem.mWRent15.toFixed(2),
            net: elem.netRentalPrice.toFixed(2),
            comRate: (elem.mWHQCommissionRate*100).toFixed(2),
            commission: elem.mWHQCommission?elem.mWHQCommission.toFixed(2):0,
            comVat: parseFloat(elem.vATonMWHQCommission).toFixed(2),
            total: parseFloat(elem.totalMWHQDeductionsfromGrossSalesPrice).toFixed(2),
            netbal: elem.netBalanceDueToVendor.toFixed(2),
            
        }
        ts.push(rentalData)
        netTotalR +=elem.netRentalPrice
        commissionTotalR += elem.mWHQCommission
        comVatTotalR += elem.vATonMWHQCommission
        totalTotalR += elem.totalMWHQDeductionsfromGrossSalesPrice
        netbalTotalR += elem.netBalanceDueToVendor
        commissionRateTotalR = (elem.mWHQCommissionRate?elem.mWHQCommissionRate*100:0*100)
        earnRent=(100-commissionRateTotalR)
    }
})
totalItemsR=ts.length
let ps = []
let totalItems=0
let netTotal=0
let commissionRateTotal=0
let commissionTotal =0
let comVatTotal=0
let totalTotal=0
let netbalTotal=0
itemsS.filter(element=>{
   
    if(element.vendorEmail ===item.email) {
       element.$transactionDate$display=new Date(element.transactionDate).toLocaleDateString("en-GB")
       console.log(element)
            let salesData = {
            date: new Date(element.transactionDate).toLocaleDateString("en-GB"),
            id: element.transactionID,
            name: element.itemName,
            sku: element.itemSKU,
            ssku: "",
            gross: element.grossSalesPrice.toFixed(2),
            net: element.netSalesPrice.toFixed(2),
            comRate: (element.mWHQCommissionRate*100).toFixed(2),
            commission: element.mWHQCommission.toFixed(2),
            comVat: parseFloat(element.vATonMWHQCommission).toFixed(2),
            total: parseFloat(element.totalMWHQDeductionsfromGrossSalesPrice).toFixed(2),
            netbal: parseFloat(element.netBalanceDueToVendor).toFixed(2)
        }
        ps.push(salesData)
        netTotal +=element.netSalesPrice
        commissionTotal += element.mWHQCommission
        comVatTotal += element.vATonMWHQCommission
        totalTotal += element.totalMWHQDeductionsfromGrossSalesPrice
        netbalTotal += element.netBalanceDueToVendor
        commissionRateTotal = (element.mWHQCommissionRate?element.mWHQCommissionRate*100:0*100)
        earnSale=(100-commissionRateTotal)
    }
})

totalItems=ps.length

let mwRental = commissionTotalR
let vendorRental = netbalTotalR 
let mwSale = commissionTotal
let vendorSale = netbalTotal
let mwSubTotal = parseFloat(mwRental)+parseFloat(mwSale)
let vendorSubTotal = parseFloat(vendorSale) + parseFloat(vendorRental)   
let mwVat = parseFloat(comVatTotal) + parseFloat(comVatTotalR)
let mwTotal = parseFloat(mwRental) + parseFloat(mwSale) + parseFloat(mwVat)
let vendorTotal = parseFloat(vendorSale) + parseFloat(vendorRental)
    let payload = {
        mth:'December',
        vendorName: vendorName,
        paymentDate: paydate,
        earnRent:item.rentalcommissionstructure*100 + "%",
        earnSale:item.salesCommissionStructure*100 + "%",
        invoiceNum:1,
        paymentPeriod:"1-31 Dec 2022",
        email: item.email, // put item.email here for live *** not in quotes, just item.email
        total: parseFloat(vendorTotal).toFixed(2),
        month:'December',
        mwRental:mwRental.toFixed(2),
        vendorRental:vendorRental.toFixed(2),
        mwSale:mwSale.toFixed(2),
        vendorSale:vendorSale.toFixed(2),
        mwSubTotal:mwSubTotal.toFixed(2),
        vendorSubTotal:vendorSubTotal.toFixed(2),
        mwVat:mwVat.toFixed(2),
        mwTotal:mwTotal.toFixed(2),
        vandorTotal:parseFloat(vendorTotal).toFixed(2),
        ps : ps,
        totalItems:totalItems,
        netTotal:netTotal.toFixed(2),
        commissionRateTotal:commissionRateTotal.toFixed(2),
        commissionTotal : commissionTotal.toFixed(2),
        comVatTotal: comVatTotal.toFixed(2),
        totalTotal:totalTotal.toFixed(2),
        netbalTotal:netbalTotal.toFixed(2),
        ts:ts,
        totalItemsR:totalItemsR,
        netTotalR:netTotalR.toFixed(2),
        commissionTotalR:commissionTotalR.toFixed(2),
        commissionRateTotalR:commissionRateTotalR.toFixed(2),
        comVatTotalR:comVatTotalR.toFixed(2),
        totalTotalR:totalTotalR.toFixed(2),
        netbalTotalR:netbalTotalR.toFixed(2),
        template: "-NNc4cGZvQZwQED3I54U"
    }
    if($getUser('showSub')){
        payload = {
        mth:'December',
        vendorName: vendorName,
        paymentDate: paydate,
        earnRent:item.rentalcommissionstructure*100 + "%",
        earnSale:item.salesCommissionStructure*100 + "%",
        invoiceNum:1,
        paymentPeriod:"1-31 Dec 2022",
        email: 'dawidhaczela@gmail.com', // put item.email here for live *** not in quotes, just item.email
        total: parseFloat(vendorTotal).toFixed(2),
        month:'December',
        mwRental:mwRental.toFixed(2),
        vendorRental:vendorRental.toFixed(2),
        mwSale:mwSale.toFixed(2),
        vendorSale:vendorSale.toFixed(2),
        mwSubTotal:mwSubTotal.toFixed(2),
        vendorSubTotal:vendorSubTotal.toFixed(2),
        mwVat:mwVat.toFixed(2),
        mwTotal:mwTotal.toFixed(2),
        vandorTotal:parseFloat(vendorTotal).toFixed(2),
        ps : ps,
        totalItems:totalItems,
        netTotal:netTotal.toFixed(2),
        commissionRateTotal:commissionRateTotal.toFixed(2),
        commissionTotal : commissionTotal.toFixed(2),
        comVatTotal: comVatTotal.toFixed(2),
        totalTotal:totalTotal.toFixed(2),
        netbalTotal:netbalTotal.toFixed(2),
        ts:ts,
        totalItemsR:totalItemsR,
        netTotalR:netTotalR.toFixed(2),
        commissionTotalR:commissionTotalR.toFixed(2),
        commissionRateTotalR:commissionRateTotalR.toFixed(2),
        comVatTotalR:comVatTotalR.toFixed(2),
        totalTotalR:totalTotalR.toFixed(2),
        netbalTotalR:netbalTotalR.toFixed(2),
        ss:[],
        totalItemsRs:0,
        netTotalRs:0.00,
        commissionRateTotalRs:0.00,
        commissionTotalRs:0.00,
        comVatTotalRs:0.00,
        totalTotalRs:0.00,
        netbalTotalRs:0.00,
        template:"-NNlLOWmA-HAgjbxy4pO"
    }
    }
   console.log(payload) 
    let d

    setTimeout(async () => {
        console.log(payload)
        d = await this.$wfGetData('-NNME5iKY51p9R5FWjFq', payload)
        console.log(d)

        if(d.success && d.response) {
            await $dgSetRowVals('vendors', item.rowKey, {
                emailSent: true,
                lastEmailSentOn: new Date().toLocaleDateString("en-GB")
            })
        } else {
            alert('Something went wrong creating the pdf or sending the email...')
        }

        $setGlobalModel('sendingEmail', false)
    }, 500)

 } catch(err) {
     $setGlobalModel('sendingEmail', false)
 }

}