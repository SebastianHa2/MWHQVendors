return function(what) {
    /* Based on the invoice type this computed property looks for
     The invoices that do not have a vendorName, extracts
     The vendor name from the seller field 
     
      */
    if(what == 'rentals') {
        let rentals = $getGrid('rentalsInvoices')

        rentals.forEach(rental => {
            if(!rental.vendorName) {
                if(rental.seller && typeof rental.seller === 'string' && rental.seller.includes('(')) {
                    let vendorName = rental.seller.split('(')[1]
                    vendorName = vendorName.replace(')', '')

                    $dgSetRowVals('rentalsInvoices', rental.rowKey, {
                        vendorName: vendorName
                    })
                }
            }
        })
    }else if(what === 'sales') {
        console.log('running sales')
        let sales = $getGrid('salesInvoices')

        sales.forEach(sale => {
            if(!sale.vendorName) {
                if(sale.seller && sale.seller.includes('(')) {
                    let vendorName = sale.seller.split('(')[1]
                    vendorName = vendorName.replace(')', '')

                    $dgSetRowVals('salesInvoices', sale.rowKey, {
                        vendorName: vendorName
                    })
                }
            }
        })
    }
}