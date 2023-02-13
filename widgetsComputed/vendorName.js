return function (email){

let names = $getGrid('vendors')
let name 
console.log(names)
names.filter(elem=>{
    if(elem.email===email){
name=elem.name?elem.name:'none'
    }
})

return name?name:'none'
}
