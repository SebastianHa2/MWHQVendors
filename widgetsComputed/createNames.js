return async function() {
    // let users = $getGrid('users')


    // users.forEach(user => {
    //     console.log(user)

    //     if(user.$group$display) {
    //         $dgSetRowVals('users', user.rowKey, {
    //             name: user.$group$display
    //         })
    //     }
    // })

    let groups = $getGrid('groups')

    console.log(groups)

    $getGrid('salesInvoices').forEach(sales => {

        
        // let date = window.excelToJsDate(sales.transactionDate)

        // console.log(date)

        // groups.forEach(group => {
        //     if(sales.vendorEmail == group.description) {
                
        //         $dgSetRowVals('salesInvoices', sales.rowKey, {
        //             acc: group.$displayName
        //         })
        //     }
        // })
        $dgSetRowVals('salesInvoices', sales.rowKey, {
             vendorName: sales.acc
          })


    })
    $getGrid('rentalsInvoices').forEach(rent => {

        // groups.forEach(group => {
        //     if(rent.vendorEmail == group.description) {
                
                $dgSetRowVals('rentalsInvoices', rent.rowKey, {
                    vendorName: rent.acc
                })
        //     }
        // })
    })




}