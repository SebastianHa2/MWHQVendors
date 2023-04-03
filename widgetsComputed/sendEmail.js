return async function(item){
 try {
     let payPeriod=this.paymentPeriod(item.email)
     let mthI = this.recInv(item.email)
let paydate = this.paymentDate(item.email)
     console.log(item)

     $setGlobalModel('sendingEmail', true)
 let items = await $getGrid('rentalsInvoices')
 let itemsS = await $getGrid('salesInvoices')
 let users = $getGrid('users')
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
 let grpR = 0


let vendorNameInv

users.forEach(user => {
    if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === item.email) {
        console.log('user is, ', user)
        vendorNameInv = user.$group$display
    }
})



console.log('Mthi', mthI)


 items.filter(elem=>{
    if(elem.vendorName === vendorNameInv && elem.invoiceMonth ===mthI ) {
console.log(elem.mWRent15)
    // item.mWHQCommission=item.netRentalPrice*item.mWHQCommissionRate
        elem.$transactionDate$display=new Date(elem.transactionDate).toLocaleDateString("en-GB")
      
        let rentalData = {
            date: new Date(elem.transactionDate).toLocaleDateString("en-GB"),
            id: elem.transactionID ? elem.transactionID : '',
            name: elem.itemName,
            sku: elem.itemSKU,
            ssku: "",
            period: elem.rentalPeriod,
            gross: parseFloat(elem.mWRent15).toFixed(2),
            net: parseFloat(elem.netRentalPrice).toFixed(2),
            comRate: (parseFloat(elem.mWHQCommissionRate)*100).toFixed(2),
            commission: parseFloat(elem.mWHQCommission)?parseFloat(elem.mWHQCommission).toFixed(2):0,
            comVat: parseFloat(elem.vATonMWHQCommission).toFixed(2),
            total: parseFloat(elem.totalMWHQDeductionsfromGrossSalesPrice).toFixed(2),
            netbal: parseFloat(elem.netBalanceDueToVendor).toFixed(2),
            
        }
        ts.push(rentalData)
        netTotalR +=parseFloat(elem.netRentalPrice)
        commissionTotalR += parseFloat(elem.mWHQCommission)
        comVatTotalR += parseFloat(elem.vATonMWHQCommission)
        totalTotalR += parseFloat(elem.totalMWHQDeductionsfromGrossSalesPrice)
        netbalTotalR += parseFloat(elem.netBalanceDueToVendor)
        grpR += parseFloat(elem.mWRent15)
        commissionRateTotalR = (parseFloat(elem.mWHQCommissionRate)?parseFloat(elem.mWHQCommissionRate)*100:0*100)
        earnRent=(100-commissionRateTotalR)
    }
    console.log(grpR)
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
let gspS=0
itemsS.filter(element=>{
   
    if(element.vendorName === vendorNameInv && element.invoiceMonth===mthI) {
       element.$transactionDate$display=new Date(element.transactionDate).toLocaleDateString("en-GB")
       console.log(element)
            let salesData = {
            date: new Date(element.transactionDate).toLocaleDateString("en-GB"),
            id: element.transactionID,
            name: element.itemName,
            sku: element.itemSKU,
            ssku: "",
            gross: parseFloat(element.grossSalesPrice).toFixed(2),
            net: parseFloat(element.netSalesPrice).toFixed(2),
            comRate: (parseFloat(element.mWHQCommissionRate)*100).toFixed(2),
            commission: parseFloat(element.mWHQCommission).toFixed(2),
            comVat: parseFloat(element.vATonMWHQCommission).toFixed(2),
            total: parseFloat(element.totalMWHQDeductionsfromGrossSalesPrice).toFixed(2),
            netbal: parseFloat(element.netBalanceDueToVendor).toFixed(2)
        }
        ps.push(salesData)
        netTotal +=parseFloat(element.netSalesPrice)
        commissionTotal += parseFloat(element.mWHQCommission)
        comVatTotal += parseFloat(element.vATonMWHQCommission)
        totalTotal += parseFloat(element.totalMWHQDeductionsfromGrossSalesPrice)
        netbalTotal += parseFloat(element.netBalanceDueToVendor)
        gspS += parseFloat(element.grossSalesPrice)
        commissionRateTotal = (parseFloat(element.mWHQCommissionRate)?parseFloat(element.mWHQCommissionRate)*100:0*100)
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
        mth:mthI,
        vendorName: vendorName,
        paymentDate: paydate,
        earnRent:item.rentalcommissionstructure*100 + "%",
        earnSale:item.salesCommissionStructure*100 + "%",
        invoiceNum:1,
        paymentPeriod:payPeriod,
        email: item.email,//'nat@mywardrobehq.com', // put item.email here for live *** not in quotes, just item.email
        total: parseFloat(vendorTotal).toFixed(2),
        month:mthI,
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
        template: "-NOjnq4bVNfjC-4Xaz8k",
        grpRental:grpR.toFixed(2),
        gspSale:gspS.toFixed(2),
    }
    if($getUser('showSub')){
        payload = {
        mth:mthI,
        vendorName: vendorName,
        paymentDate: paydate,
        earnRent:item.rentalcommissionstructure*100 + "%",
        earnSale:item.salesCommissionStructure*100 + "%",
        invoiceNum:1,
        paymentPeriod:payPeriod,
        email: 'NPAWLAK11@GMAIL.COM', // put item.email here for live *** not in quotes, just item.email
        total: parseFloat(vendorTotal).toFixed(2),
        month:mthI,
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
        template:"-NNlLOWmA-HAgjbxy4pO",
        grpRental:grpR.toFixed(2),
        gspSale:gspS.toFixed(2),
        grpSub:0.00
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

            await $dgAddRow('emailsSent', {
                name: vendorNameInv,
                sentOn: moment.utc().format('DD/MM/YYYY hh:mm:ss')
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