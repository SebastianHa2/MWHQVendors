window.checkPermissions = function() {
    console.log('running')
    let email = this.fbUser.email

    console.log(email)
    let notAllowed = false
    $getGrid('users').forEach(user => {
        if(user.$user$display && user.$user$display[0] === email && user.role === '-NNG5Rxj9yl2W72FTHOh') {
            notAllowed = true
        }
    })

    return notAllowed
}