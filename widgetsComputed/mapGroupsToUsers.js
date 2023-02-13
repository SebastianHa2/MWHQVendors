return async function() {
    let groups = $getGrid('groups')
    let users = $getGrid('users')

    
    console.log(groups, users)
    let emailsMapped = []
    groups.forEach(async(group, idx) => {
        users.forEach(async user => {
            if(user.$user$display && user.$user$display.length > 0) {
                if(user.$user$display[0].toLowerCase().trim() == group.description.toLowerCase().trim()) {
                    console.log('mapped', user.$user$display[0], group.description)
                    emailsMapped.push(group.description)
                    setTimeout(async () => {
                        await $dgSetRowVals('users', user.rowKey, {
                            group: group.rowKey
                        })
                    })
                }
            }
        })
    })

    console.log('mapped following emails', emailsMapped)
}