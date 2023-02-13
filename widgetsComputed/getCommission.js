return async function() {

    console.log($getUser('mwhq'))

    let mwhq = $getUser('mwhq')
    let rentals = $getGrid('rentalsInvoices')

    mwhq.forEach(item => {
        rentals.forEach(rental => {
            if(item.rowKey === rental.rowKey) {
                
                if(item.mWHQCommission && !item.mWHQCommission.toString().includes('VALUE')) {
                    console.log('found and will update')
                    $dgSetRowVals('rentalsInvoices', rental.rowKey, {
                        mWHQCommission: item.mWHQCommission
                    })
                } else {
                    console.log('found and will not update')
                    $dgSetRowVals('rentalsInvoices', rental.rowKey, {
                        mWHQCommission: null
                    })
                }
            }
        })
    })
}