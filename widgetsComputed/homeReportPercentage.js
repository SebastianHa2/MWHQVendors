return function(email){
    let vendors = $getGrid('vendors')
    let perRent
    let perSale
    vendors.filter(item=>{
        if(item.email===email){
            perRent=item.rentalcommissionstructure*100
            perSale=item.salesCommissionStructure*100
        }
    })
    return{perRent:perRent,perSale:perSale}
}