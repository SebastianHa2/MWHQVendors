return async function(item){
    $setUser('email', item.email)
    $setUser('showReport', true)
}