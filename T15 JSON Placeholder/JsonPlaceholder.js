// fetch('https://jsonplaceholder.typicode.com/users/1',{
//     method:'PATCH',
//     body : JSON.stringify({
//         name : 'Dharaiya',
//         phone : '554-526-521',
//         username : 'MrAssassin'
//     }),
//     headers : {
//         'Content-type' : 'application/json'
//     }
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

document.getElementById('GetData').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((json) => json.forEach(d => addRow('getdata', d)))
})

function addRow(element, data) {
    let tr = document.createElement('tr')
    innerHtml = '<td>' + `${data.name}` + ' </td> <td>' + `${data.username}` + '</td> <td>' + `${data.email}` + '</td> <td>' + `${data.phone}` + '</td>'
    tr.innerHTML = innerHtml
    document.querySelector(`#${element}`).insertAdjacentElement('beforeend', tr)
}

document.getElementById('PostData').addEventListener('click', () => {
    const nm = document.querySelector('#name').value
    const username = document.querySelector('#username').value
    const email = document.querySelector('#email').value
    const contact = document.querySelector('#number').value

    let user_data = { 'name': nm, 'username': username, 'email': email, 'phone': contact }
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(user_data),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((json) => console.log('data inserted... ', json));
})

document.getElementById('PatchData').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => res.json())
        .then((json) => console.log('Data with id 1 before updatation', json))

    fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'PATCH',
        body: JSON.stringify({
            username: 'Mr_Assassin',
            name: "Parthik"
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((json) => console.log('Data with id 1 after updatation', json));
})

document.getElementById('DeleteData').addEventListener('click', () => {

    fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'DELETE'
    })
        .then((response) => response.json())
        .then((json) => console.log('Data deleted', json));
})