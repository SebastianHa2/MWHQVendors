return function (email){
    let items = $getGrid('salesInvoices')
    let itemsR = $getGrid('rentalsInvoices')
let recentInvS
let recentInvR
let period


let users = $getGrid('users')

// console.log(email)

let vendorName

users.forEach(user => {
    if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === email) {
        // console.log('VENDOR user IS ,', user)
        vendorName = user.$group$display
    }
})

if(!vendorName) {
    vendorName = 'none'
}

// console.log('VENDOR NAME IS, ', vendorName)


items.forEach(item =>{
    if(item.vendorName === vendorName && item.invoiceMonth === "May"){
         recentInvS = 6
         

    }
    else if(item.vendorName === vendorName && item.invoiceMonth === "April" && recentInvS !== 6){
         recentInvS = 5
         

    }
    else if(item.vendorName === vendorName && item.invoiceMonth === "March" && recentInvS !== 5 ){
         recentInvS = 4
         

    }
    else if(item.vendorName === vendorName && item.invoiceMonth === "February" && recentInvS !== 4){
         recentInvS = 3
         

    }
    else if(item.vendorName ===vendorName && item.invoiceMonth==="January" && recentInvS !== 3){
         recentInvS = 2
         
    }
    else if (recentInvS !== 2 && recentInvS !== 3 && recentInvS !== 4 && recentInvS !== 5 && recentInvS !== 6){
       recentInvS = 1
       
    }
})
itemsR.forEach(item =>{
    if(item.vendorName ===vendorName && item.invoiceMonth==="May"){
         recentInvR = 6
         

    }
    else if(item.vendorName ===vendorName && item.invoiceMonth==="April" && recentInvR !== 6){
         recentInvR = 5
         

    }
    else if(item.vendorName ===vendorName && item.invoiceMonth==="March" && recentInvR !== 5){
         recentInvR = 4
         

    }
    else if(item.vendorName ===vendorName && item.invoiceMonth==="February" && recentInvR !== 4){
         recentInvR = 3
         

    }
    else if(item.vendorName ===vendorName && item.invoiceMonth==="January" && recentInvR !== 3){
         recentInvR = 2
         
    }
    else if(recentInvR !== 2 && recentInvR !== 3 && recentInvR !== 4 && recentInvR !== 5 && recentInvR !==6) {
       recentInvR = 1
       
    }
    // console.log('item recent month is', recentInvR)
})
if(recentInvR ===6 || recentInvS === 6){
  period = "May"
}
else if(recentInvR ===5 || recentInvS === 5){
  period = "April"
}
else if(recentInvR ===4 || recentInvS === 4){
  period = "March"
}
else if(recentInvR ===3 || recentInvS === 3){
  period = "February"
}
else if(recentInvR === 2 || recentInvS === 2){
  period = "January"
}
else{
    period = "December"
}


// console.log('period is, ', period)
return period 
}