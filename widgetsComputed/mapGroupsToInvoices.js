return async function() {
    let rentals = $getGrid('rentalsInvoices')
    let sales = $getGrid('salesInvoices')
    let groups = $getGrid('groups')

    console.log(rentals, sales, groups)

    groups.forEach(async (group, idx) => {
        sales.forEach(async sale => {
            if(sale.vendorEmail === group.description) {
                setTimeout(async () => {
                    $dgSetRowVals('salesInvoices', sale.rowKey, {
                        group: group.rowKey
                    })
                }, idx*1000)
            }
        })

        rentals.forEach(async rent => {
            if(rent.vendorEmail === group.description) {
                setTimeout(async () => {
                    $dgSetRowVals('rentalsInvoices', rent.rowKey, {
                        group: group.rowKey
                    })
                }, idx*1000)
            }
        })
    })
}