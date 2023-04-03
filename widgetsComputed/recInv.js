return function (email){
    let items = $getGrid('salesInvoices')
    let itemsR = $getGrid('rentalsInvoices')
let recentInvS
let recentInvR
let period


let users = $getGrid('users')

console.log(email)

let vendorName

users.forEach(user => {
    if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === email) {
        console.log('VENDOR user IS ,', user)
        vendorName = user.$group$display
    }
})

if(!vendorName) {
    vendorName = 'none'
}

console.log('VENDOR NAME IS, ', vendorName)


items.forEach(item =>{
    if(item.vendorName === vendorName && item.invoiceMonth === "February"){
         recentInvS = 3
         

    }
    else if(item.vendorName ===vendorName && item.invoiceMonth==="January" && recentInvS !== 3){
         recentInvS = 2
         
    }
    else if (recentInvS !== 2 && recentInvS !== 3){
       recentInvS = 1
       
    }
})
itemsR.forEach(item =>{
    if(item.vendorName ===vendorName && item.invoiceMonth==="February"){
         recentInvR = 3
         

    }
    else if(item.vendorName ===vendorName && item.invoiceMonth==="January" && recentInvR !== 3){
         recentInvR = 2
         
    }
    else if(recentInvR !== 2 && recentInvR !== 3){
       recentInvR = 1
       
    }
})
if(recentInvR ===3 || recentInvS === 3){
  period = "February"
}
else if(recentInvR === 2 || recentInvS === 2){
  period = "January"
}
else{
    period = "December"
}


//console.log('period is, ', period)
return period 
}