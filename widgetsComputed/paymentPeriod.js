// return function (email){
//     let items = $getGrid('salesInvoices')
//     let itemsR = $getGrid('rentalsInvoices')
// let recentInvS
// let recentInvR
// let period

// let users = $getGrid('users')

// console.log(email)

// let vendorName

// users.forEach(user => {
//     if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === email) {
//         console.log('user is, ', user)
//         vendorName = user.$group$display
//     }
// })

// if(!vendorName) {
//     vendorName = 'none'
// }



// items.forEach(item =>{
//     if(item.vendorName ===vendorName && item.invoiceMonth==="March"){
//          recentInvS = 4
         

//     }
//    else if(item.vendorName ===vendorName && item.invoiceMonth==="February"){
//          recentInvS = 3
         

//     }
//     else if(item.vendorName ===vendorName && item.invoiceMonth==="January" && recentInvS !== 3){
//          recentInvS = 2
         
//     }
//     else if (recentInvS !== 2 && recentInvS !== 3){
//        recentInvS = 1
       
//     }
// })
// itemsR.forEach(item =>{
//     if(item.vendorName ===vendorName && item.invoiceMonth==="March"){
//          recentInvR = 4
         

//     }
//     else if(item.vendorName ===vendorName && item.invoiceMonth==="February"){
//          recentInvR = 3
         

//     }
//     else if(item.vendorName ===vendorName && item.invoiceMonth==="January" && recentInvR !== 3){
//          recentInvR = 2
         
//     }
//     else if(recentInvR !== 2 && recentInvR !== 3 ){
//        recentInvR = 1
       
//     }
// })
// if(recentInvR===4 || recentInvS===4){
//   period = '1-31 Mar 2023'
// }
// else if(recentInvR===3 || recentInvS===3){
//   period = '1-28 Feb 2023'
// }
// else if(recentInvR===2 || recentInvS===2){
//   period = '1-30 Jan 2023'
// }
// else{
//     period = '1-31 Dec 2022'
// }
// return period 
// }
return function (email){

let recentInv


recentInv = this.recInv(email)



if(recentInv==="February"){
  period = '1-28 Feb 2023'
}
else if(recentInv==="January"){
  period = '1-30 Jan 2023'
}
else if(recentInv==="March"){
  period = '1-31 Mar 2023'
}
else if(recentInv==="April"){
  period = '1-30 Apr 2023'
}
else if(recentInv==="May"){
  period = '1-31 May 2023'
}
else if(recentInv==="June"){
  period = '1-30 Jun 2023'
}
else if(recentInv==="July"){
  period = '1-31 July 2023'
}
else if(recentInv==="August"){
  period = '1-31 Aug 2023'
}
else if(recentInv==="September"){
  period = '1-30 Sep 2023'
}
else if(recentInv==="October"){
  period = '1-31 Oct 2023'
}
else if(recentInv==="November"){
  period = '1-30 Nov 2023'
}
else{
    period = '1-31 Dec 2022'
}
return period 
}
