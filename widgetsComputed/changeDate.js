return function () {
    let data = $getGrid('salesInvoices')

    data.forEach(elem=>{
        console.log(elem.customerDueDateV
)
//  let dated = new Date(Math.round((elem.customerDueDate- 25569)*86400*1000));
//         console.log(moment(dated).format('MM/DD/YYYY'))
         $dgSetRowVals('salesInvoices', elem.rowKey, {customerDueDate: elem.customerDueDateV})
    })
}