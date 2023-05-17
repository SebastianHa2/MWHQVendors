return async function(){
    let vendors = $getGrid('vendors')
    vendors.forEach( async vendor=>{
        if(vendor.select){
            console.log(vendor.name)
            let item = {
                rowKey:vendor.rowKey,
                email:vendor.email,
                name:vendor.name
            }
            this.sendEmail(item)
          
        }
    })
}