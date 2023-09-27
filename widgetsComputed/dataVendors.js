return async function(name){
    let v = $getGrid('groups')

    await v.forEach(vendor=>{
        if(vendor.name===name){
            $setUser('email', vendor.description)
        }
    })
}