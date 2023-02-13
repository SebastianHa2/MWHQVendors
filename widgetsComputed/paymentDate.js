return function(month){
let date = $getGrid('staticValues')
let paymentDate
date.filter(item => {
    console.log(item)
    console.log(month)
    
if(month=== item.$month.name
){
 paymentDate=item.paymentDate
}
    
})
return paymentDate
}