

let emails = $getUser('vendorsEmail')
let items = await $getGrid('rentalsInvoices')
let itemsS = await $getGrid('salesInvoices')

let netBalR=0
let netBalS=0

let netVendorsRent = []
let netVendorsSale = []
let netVendors = []

for(let i =0; i<emails.length; i++){
    items.forEach(item=>{
        if(item.vendorEmail===emails[i]){
            netBalR += item.netBalanceDueToVendor?item.netBalanceDueToVendor:0
        }
    })
  netVendorsRent.push({email:emails[i], totalDuetoVendor:netBalR})
  netBalR=0
}
for(let i =0; i<emails.length; i++){
    itemsS.forEach(item=>{
        if(item.vendorEmail===emails[i]){
            netBalS += item.netBalanceDueToVendor?item.netBalanceDueToVendor:0
        }
    })
  netVendorsSale.push({email:emails[i], totalDuetoVendor:netBalS})
  netBalS=0
}

netVendors=netVendorsRent.map(item=>{
    netVendorsSale.forEach(ele=>{
        if(item.email===ele.email){
            item.totalDuetoVendor+=ele.totalDuetoVendor
        }
    })
    return item
})

// console.log(netVendorsRent)
// console.log(netVendorsSale)
console.log(netVendors)

return netVendors
