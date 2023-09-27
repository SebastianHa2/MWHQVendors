return function(email){
    let vendors = $getGrid('vendors')
    let perRent
    let perSale
    let users = $getGrid('users')

    // console.log(email)

    let groupRowKey

    users.forEach(user => {
        if(user.$group && user.$group.description && user.$group.description.length > 0 && user.$group.description === email) {
            // console.log('user is here, ', user)
            // vendorName = user.$group$display
            groupRowKey = user.group
        }
        // if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === email) {
        //     // console.log('user is, ', user)
        //     groupRowKey = user.group
        // }
    })
    let found = false
    vendors.filter(item=>{
        if(item.email === email){
            // console.log (item.name + "Here")
            found = true
            perRent=item.rentalcommissionstructure*100
            perSale=item.salesCommissionStructure*100
        }
    })


    if(!found) {
    vendors.filter(item=>{
        if(item.groupcorrect === groupRowKey){
            console.log (item.name + "Here")
            found = true
            perRent=item.rentalcommissionstructure*100
            perSale=item.salesCommissionStructure*100
        }
    })
    }



    return{perRent:perRent,perSale:perSale}


}