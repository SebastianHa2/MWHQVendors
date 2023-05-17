return function (email){

let names = $getGrid('vendors')
let name 
// console.log(names)
names.filter(elem=>{
    if(elem.email===email){
        name=elem.name?elem.name:'none'
    }
})
// console.log('HEREEE', name)

if(!name || name == 'none') {
    // console.log('no name')
    let users = $getGrid('users')
    let groupRowKey
    users.forEach(user => {
        if(user.$user$display && user.$user$display.length > 0 && user.$user$display[0] === email) {
            // console.log('user is, ', user)
            groupRowKey = user.group
        }
    })

    names.forEach(elem => {
        if(elem.groupcorrect == groupRowKey) {
            name=elem.name?elem.name:'none'
        }
    })
}

return name?name:'none'
}
