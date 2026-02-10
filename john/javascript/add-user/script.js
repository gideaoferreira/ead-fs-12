const btnAddUser = document.getElementById('btn-add-user')
const tableBody = document.getElementById('table-body')
let users = []
let formIsValid = true

if(users = JSON.parse(localStorage.getItem('users'))) {
    users.forEach(function (user) {
        const tr = document.createElement('tr')

        tr.innerHTML = `
        <td> ${user.name} </td>
        <td> ${user.surname} </td>
        <td> ${user.birthdate} </td>
        <td> ${user.email} </td>
        <td> ${user.phone} </td>
        <td> ${user.cpf} </td>
    `

        tableBody.appendChild(tr)
    })
}

btnAddUser.addEventListener('click',function() {
    formIsValid = true  
    const formAddUser = document.getElementById('form-add-user')
    // console.log('Aqui temos apenas o nosso formulário "cru":', formAddUser)

    const formData = new FormData(formAddUser)
    // formData.append('user_admin', false) adiciona 
    // console.log('Aqui temos uma conversão para tratarmos nosso formulário:', formData)

    const data = Object.fromEntries(formData)

    Object.keys(data).forEach(function (key) {
        if(document.getElementById(`${key}-message-error`)) {
            document.getElementById(`${key}-message-error`).classList.add(`d-none`)
        }
    
    Object.keys(data).forEach(function (key) {
        const value = data[key]
        if(value === '' || value === null) {
            formIsValid = false
            if(document.getElementById(`${key}-message-error`)) {
                document.getElementById(`${key}-message-error`).classList.remove(`d-none`)
            }
        }
    })

    if (!formIsValid) {
        return
    }

    users.push(data)
    localStorage.setItem('users', JSON.stringify(users))

    const tr = document.createElement('tr')

    tr.innerHTML = `
        <td> ${data.name} </td>
        <td> ${data.surname} </td>
        <td> ${data.birthdate} </td>
        <td> ${data.email} </td>
        <td> ${data.phone} </td>
        <td> ${data.cpf} </td>
    `

    tableBody.appendChild(tr)
    formAddUser.reset()
})})