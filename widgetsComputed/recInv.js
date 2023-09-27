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
    // if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === email) {
    //     // console.log('VENDOR user IS ,', user)
    //     vendorName = user.$group$display
    // }
   if(user.$group && user.$group.description && user.$group.description.length > 0 && user.$group.description === email) {
            console.log('user is here, ', user)
            vendorName = user.$group$display
        }
})

if(!vendorName) {
    vendorName = 'none'
}

// console.log('VENDOR NAME IS, ', vendorName)


items.forEach(item =>{
        if(item.vendorName === vendorName && item.invoiceMonth === "November"){
         recentInvS = 12
         

    }
       else if(item.vendorName === vendorName && item.invoiceMonth === "October" && recentInvS !== 12){
         recentInvS = 11
         

    }
       else if(item.vendorName === vendorName && item.invoiceMonth === "September" && recentInvS !== 11){
         recentInvS = 10
         

    }
      else  if(item.vendorName === vendorName && item.invoiceMonth === "August" && recentInvS !== 10){
         recentInvS = 9
         

    }
    else    if(item.vendorName === vendorName && item.invoiceMonth === "July" && recentInvS !== 9){
         recentInvS = 8
         

    }
    else if(item.vendorName === vendorName && item.invoiceMonth === "June" && recentInvS !== 8){
         recentInvS = 7
         

    }
    else if(item.vendorName === vendorName && item.invoiceMonth === "May" && recentInvS !== 7){
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
    else if (recentInvS !== 2 && recentInvS !== 3 && recentInvS !== 4 && recentInvS !== 5 && recentInvS !== 6 && recentInvS !== 7 && recentInvS !== 8 && recentInvS !== 9 && recentInvS !== 10 && recentInvS !== 11 && recentInvS !== 12){
       recentInvS = 1
       
    }
})
itemsR.forEach(item =>{
        if(item.vendorName ===vendorName && item.invoiceMonth==="November"){
         recentInvR = 12
         

    }
       else if(item.vendorName ===vendorName && item.invoiceMonth==="October" && recentInvR !== 12){
         recentInvR = 11
         

    }
       else if(item.vendorName ===vendorName && item.invoiceMonth==="September" && recentInvR !== 11){
         recentInvR = 10
         

    }
       else if(item.vendorName ===vendorName && item.invoiceMonth==="August" && recentInvR !== 10){
         recentInvR = 9
         

    }
        else if(item.vendorName ===vendorName && item.invoiceMonth==="July" && recentInvR !== 9){
         recentInvR = 8
         

    }
    else if(item.vendorName ===vendorName && item.invoiceMonth==="June" && recentInvR !== 8){
         recentInvR = 7
         

    }
    else if(item.vendorName ===vendorName && item.invoiceMonth==="May" && recentInvR !== 7){
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
    else if(recentInvR !== 2 && recentInvR !== 3 && recentInvR !== 4 && recentInvR !== 5 && recentInvR !==6 && recentInvR !==7  && recentInvR !== 8 && recentInvR !==9 && recentInvR !== 10 && recentInvR !== 11) {
       recentInvR = 1
       
    }
    // console.log('item recent month is', recentInvR)
})
if(recentInvR ===12 || recentInvS === 12){
  period = "November"
}
else if(recentInvR ===11 || recentInvS === 11){
  period = "October"
}
else if(recentInvR ===10 || recentInvS === 10){
  period = "September"
}
else if(recentInvR ===9 || recentInvS === 9){
  period = "August"
}
else if(recentInvR ===8 || recentInvS === 8){
  period = "July"
}
else if(recentInvR ===7 || recentInvS === 7){
  period = "June"
}
else if(recentInvR ===6 || recentInvS === 6){
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

if($getUser('monthSelect') && $getUser('monthSelect')!==period){
    period=$getUser('monthSelect')
}
// console.log('period is, ', period)
return period 
}