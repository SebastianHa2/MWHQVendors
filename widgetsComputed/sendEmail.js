
return async function(item){
// console.log(item.email)
 try {
     let payPeriod=this.paymentPeriod(item.email)
    //  let payPeriod='22/22/22'
     let mthI = this.recInv(item.email)
     let paydate = this.paymentDate(item.email)
    // let paydate = 'February 2023'
    let perRental = this.homeReportPercentage(item.email).perRent
    let commissionRate = 100 - perRental
    let perRentalS = this.homeReportPercentage(item.email).perSale
    let commissionRateS = 100 - perRentalS
// console.log('here')
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
        // console.log('user is, ', user)
        vendorNameInv = user.$group$display
    }
})
 let ss=[]
 let totalItemsS=0
 let netTotalS=0
 let commissionRateTotalS=0
 let commissionTotalS=0
 let comVatTotalS=0
 let totalTotalS=0
 let netbalTotalS=0
 let gspSaleS=0
 items.filter(elem=>{
    if(elem.vendorName === vendorNameInv && elem.invoiceMonth ===mthI && elem.pointofSale==="MEMBERSHIP_SUBSCRIPTION" ) {
// console.log(elem.mWRent15)
    // item.mWHQCommission=item.netRentalPrice*item.mWHQCommissionRate
        elem.$transactionDate$display=new Date(elem.transactionDate).toLocaleDateString("en-GB")
      
        let rentalData = {
            date: new Date(elem.transactionDate).toLocaleDateString("en-GB"),
            id: elem.transactionID ? elem.transactionID : '',
            name: elem.itemName,
            sku: elem.itemSKU,
            period: elem.rentalPeriod,
            gross: parseFloat(elem.grossRentalPrice).toFixed(2),
            net: '0.00',
            comRate:'0.00',
            commission:'0.00',
            comVat: '0.00',
            total: '0.00',
            netbal: parseFloat(elem.grossRentalPrice).toFixed(2),
            
        }
        ss.push(rentalData)
        // netTotalS +=parseFloat(elem.netRentalPrice)
        // commissionTotalS += parseFloat(elem.mWHQCommission)
        // comVatTotalS += parseFloat(elem.vATonMWHQCommission)
        // totalTotalS += parseFloat(elem.totalMWHQDeductionsfromGrossSalesPrice)
        // netbalTotalS += parseFloat(elem.grossRentalPrice)
        // gspSaleS += parseFloat(elem.grossRentalPrice)
        // commissionRateTotalS = (parseFloat(elem.mWHQCommissionRate)?parseFloat(elem.mWHQCommissionRate)*100:0*100)
        netTotalS +=0
        commissionTotalS += 0
        comVatTotalS += 0
        totalTotalS += 0
        netbalTotalS += parseFloat(elem.grossRentalPrice)
        gspSaleS += parseFloat(elem.grossRentalPrice)
        commissionRateTotalS += 0
    }
   
})
totalItemsS=ss.length


 items.filter(elem=>{
    if(elem.vendorName === vendorNameInv && elem.invoiceMonth ===mthI && elem.pointofSale!=="MEMBERSHIP_SUBSCRIPTION") {
// console.log(elem.mWRent15)
    // item.mWHQCommission=item.netRentalPrice*item.mWHQCommissionRate
        elem.$transactionDate$display=new Date(elem.transactionDate).toLocaleDateString("en-GB")
        // console.log(elem)
        let mWRent15
            if(elem.grossRentalPrice>0){
// console.log('here', elem.grossRentalPrice)
            mWRent15 = elem.grossRentalPrice - 15
            }
            else{
               mWRent15=elem.mWRent15
            }
            // if(parseFloat(mWRent15)<0){
            //     mwRent = item.mWRent15
            // }
            
// console.log('here', mWRent15)

            let net = parseFloat(mWRent15) ? parseFloat((parseFloat(mWRent15)/6)*5).toFixed(2) : ''
            let mwRent = parseFloat(mWRent15) ? parseFloat(mWRent15).toFixed(2) : ''
            let commission = parseFloat(mWRent15) ? parseFloat(((parseFloat(mWRent15)/6)*5)*(commissionRate/100)).toFixed(2) : ''
            let comVat = parseFloat(mWRent15) ? parseFloat((((parseFloat(mWRent15)/6)*5)*(commissionRate/100))*0.2).toFixed(2) : ''
            let total = parseFloat(commission)+parseFloat(comVat)
        let rentalData = {
            date: new Date(elem.transactionDate).toLocaleDateString("en-GB"),
            id: elem.transactionID ? elem.transactionID : '',
            name: elem.itemName,
            sku: elem.itemSKU,
            ssku: "",
            period: elem.rentalPeriod,
            gross: parseFloat(mwRent).toFixed(2),
            net: parseFloat(net).toFixed(2),
            comRate: parseFloat(commissionRate).toFixed(2),
            commission: parseFloat(commission).toFixed(2),
            comVat: parseFloat(comVat).toFixed(2),
            total: (parseFloat(commission)+parseFloat(comVat)).toFixed(2),
            netbal: (parseFloat(mwRent)-parseFloat(total)).toFixed(2),
            
        }
        // let rentalData = {
        //     date: new Date(elem.transactionDate).toLocaleDateString("en-GB"),
        //     id: elem.transactionID ? elem.transactionID : '',
        //     name: elem.itemName,
        //     sku: elem.itemSKU,
        //     ssku: "",
        //     period: elem.rentalPeriod,
        //     gross: parseFloat(elem.mWRent15).toFixed(2),
        //     net: parseFloat(elem.netRentalPrice).toFixed(2),
        //     comRate: (parseFloat(elem.mWHQCommissionRate)*100).toFixed(2),
        //     commission: parseFloat(elem.mWHQCommission)?parseFloat(elem.mWHQCommission).toFixed(2):0,
        //     comVat: parseFloat(elem.vATonMWHQCommission).toFixed(2),
        //     total: parseFloat(elem.totalMWHQDeductionsfromGrossSalesPrice).toFixed(2),
        //     netbal: parseFloat(elem.netBalanceDueToVendor).toFixed(2),
            
        // }
        ts.push(rentalData)
        netTotalR +=parseFloat(net)
        commissionTotalR += parseFloat(commission)
        comVatTotalR += parseFloat(comVat)
        totalTotalR += parseFloat(commission)+parseFloat(comVat)
        netbalTotalR += parseFloat(mwRent)-parseFloat(total)
        grpR += parseFloat(mwRent)
        commissionRateTotalR = parseFloat(commissionRate)
        earnRent=(100-commissionRate)
    }
    // console.log(grpR)
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
    //    console.log(element)
            let mWRent15 = element.grossSalesPrice
            let net = parseFloat(mWRent15) ? parseFloat((parseFloat(mWRent15)/6)*5).toFixed(2) : ''
            let mwRent = parseFloat(mWRent15) ? parseFloat(mWRent15).toFixed(2) : ''
            let commission = parseFloat(mWRent15) ? parseFloat(((parseFloat(mWRent15)/6)*5)*(commissionRateS/100)).toFixed(2) : ''
            let comVat = parseFloat(mWRent15) ? parseFloat((((parseFloat(mWRent15)/6)*5)*(commissionRateS/100))*0.2).toFixed(2) : ''
            let total = parseFloat(commission)+parseFloat(comVat)
            let salesData = {
            date: new Date(element.transactionDate).toLocaleDateString("en-GB"),
            id: element.transactionID,
            name: element.itemName,
            sku: element.itemSKU,
            ssku: "",
            gross: parseFloat(mwRent).toFixed(2),
            net: parseFloat(net).toFixed(2),
            comRate: parseFloat(commissionRateS).toFixed(2),
            commission: parseFloat(commission).toFixed(2),
            comVat: parseFloat(comVat).toFixed(2),
            total: (parseFloat(commission)+parseFloat(comVat)).toFixed(2),
            netbal: (parseFloat(mwRent)-parseFloat(total)).toFixed(2)
        }
        //     let salesData = {
        //     date: new Date(element.transactionDate).toLocaleDateString("en-GB"),
        //     id: element.transactionID,
        //     name: element.itemName,
        //     sku: element.itemSKU,
        //     ssku: "",
        //     gross: parseFloat(element.grossSalesPrice).toFixed(2),
        //     net: parseFloat(element.netSalesPrice).toFixed(2),
        //     comRate: (parseFloat(element.mWHQCommissionRate)*100).toFixed(2),
        //     commission: parseFloat(element.mWHQCommission).toFixed(2),
        //     comVat: parseFloat(element.vATonMWHQCommission).toFixed(2),
        //     total: parseFloat(element.totalMWHQDeductionsfromGrossSalesPrice).toFixed(2),
        //     netbal: parseFloat(element.netBalanceDueToVendor).toFixed(2)
        // }
        ps.push(salesData)
        netTotal += parseFloat(net)
        commissionTotal += parseFloat(commission)
        comVatTotal += parseFloat(comVat)
        totalTotal += parseFloat(commission)+parseFloat(comVat)
        netbalTotal += parseFloat(mwRent)-parseFloat(total)
        gspS += parseFloat(mwRent)
        commissionRateTotal = parseFloat(commissionRate)
        earnSale=(100-commissionRateS)
    }
})
// console.log(vendorName)
totalItems=ps.length
let mwSub= commissionTotalS.toFixed(2)
let vendorSub = netbalTotalS
let mwRental = commissionTotalR
let vendorRental = netbalTotalR 
let mwSale = commissionTotal
let vendorSale = netbalTotal
let mwSubTotal = parseFloat(mwRental)+parseFloat(mwSale) + parseFloat(mwSub)
let vendorSubTotal = parseFloat(vendorSale) + parseFloat(vendorRental) + parseFloat(vendorSub)  
let mwVat = parseFloat(comVatTotal) + parseFloat(comVatTotalR)
let mwTotal = parseFloat(mwRental) + parseFloat(mwSale) + parseFloat(mwVat) + parseFloat(mwSub)
let vendorTotal = parseFloat(vendorSale) + parseFloat(vendorRental) + parseFloat(vendorSub)  
    let payload = {
        mth:mthI,
        vendorName: vendorName,
        paymentDate: paydate,
        earnRent:perRental + "%",
        earnSale:perRentalS + "%",
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
    if(ss.length>0){
        payload = {
        mth:mthI,
        vendorName: vendorName,
        paymentDate: paydate,
        earnRent:perRental + "%",
        earnSale:perRentalS + "%",
        invoiceNum:1,
        paymentPeriod:payPeriod,
        email: item.email, // put item.email here for live *** not in quotes, just item.email
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
        ss:ss,
        totalItemsS:totalItemsS,
        netTotalS:netTotalS.toFixed(2),
        commissionRateTotalS:commissionRateTotalS.toFixed(2),
        commissionTotalS:commissionTotalS.toFixed(2),
        comVatTotalS:comVatTotalS.toFixed(2),
        totalTotalS:totalTotalS.toFixed(2),
        netbalTotalS:netbalTotalS.toFixed(2),
        template:"-NTZ6UknbVSbsR5CmiBe",
        grpRental:grpR.toFixed(2),
        gspSale:gspS.toFixed(2),
        gspSaleS:gspSaleS.toFixed(2),
        mwSub:mwSub,
        vendorSub:vendorSub
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
                lastEmailSentOn: new Date().toLocaleDateString("en-GB"),
                select:false
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