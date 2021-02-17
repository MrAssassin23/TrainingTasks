$(document).ready(() => {
    $('#GetData').click(() => {
        $.ajax('https://jsonplaceholder.typicode.com/users', {
            success: printdata
        })
    })

    $('#PostData').click(() => {
        const nm = $('#name').val()
        const username = $('#username').val()
        const email = $('#email').val()
        const contact = $('#number').val()

        let user_data = { 'name': nm, 'username': username, 'email': email, 'phone': contact }
        console.log(user_data)
        $.post('https://jsonplaceholder.typicode.com/users', user_data, printdata)
    })

    $('#PatchData').click(() => {
        $.ajax('https://jsonplaceholder.typicode.com/users/1', {
            success: printdata
        })
        $.ajax('https://jsonplaceholder.typicode.com/users/1', {
            type: 'PATCH',
            data: {
                username: 'Mr_Assassin',
                name: "Parthik"
            },
            success: printdata
        })
    })

    $('#DeleteData').click(() => {
        $.ajax('https://jsonplaceholder.typicode.com/users/1', {
            type: 'DELETE',
            success: printdata
        })
    })
})

const printdata = (data, status) => {
    console.log({ data, status })
}