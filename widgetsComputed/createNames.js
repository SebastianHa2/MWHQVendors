return async function() {
    let users = $getGrid('users')


    users.forEach(user => {
        console.log(user)

        if(user.$group$display) {
            $dgSetRowVals('users', user.rowKey, {
                name: user.$group$display
            })
        }
    })
}