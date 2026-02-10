const btnAddUser = document.getElementById('btn-add-user')
const tableBody = document.getElementById('table-body')
let users = []
let formIsValid = true

let data = JSON.parse(localStorage.getItem('users'))

function deleteUser(cpf) {
    users = users.filter(function (user) {
        if (user.cpf !== cpf) {
            return user
        }
    })
    console.log(users)

    localStorage.setItem('users', JSON.stringify(users))
    tableBody.innerHTML = ''
    users.forEach(function (user) {
        const tr = document.createElement('tr')
            tr.innerHTML = `
                <td> ${user.name} </td>
                <td> ${user.surname} </td>
                <td> ${user.birthdate} </td>
                <td> ${user.email} </td>
                <td> ${user.phone} </td>
                <td> ${user.cpf} </td>
                <td> <button class="btn btn-danger btn-sm" type="button" onclick="deleteUser('${user.cpf}')"> Deletar </button></td>
            `
        tableBody.appendChild(tr)
    })
}

if (data) {
    data.forEach(function (user) {
        users.push(user)
        const tr = document.createElement('tr')
            tr.innerHTML = `
                <td> ${user.name} </td>
                <td> ${user.surname} </td>
                <td> ${user.birthdate} </td>
                <td> ${user.email} </td>
                <td> ${user.phone} </td>
                <td> ${user.cpf} </td>
                <td> <button class="btn btn-danger btn-sm" type="button" onclick="deleteUser('${user.cpf}')"> Deletar </button></td>
            `
        tableBody.appendChild(tr)
    })
}

btnAddUser.addEventListener('click', function () {
    formIsValid = true
    const forAddUser = document.getElementById('form-add-user')
    
    // Conversão de dados da tabela para estrair o objeto com chave:valor
    const formData = new FormData(forAddUser)   
    const data = Object.fromEntries(formData)

    Object.keys(data).forEach(function (key) {
        if (document.getElementById(`${key}-message-error`)) {
            document.getElementById(`${key}-message-error`).classList.add('d-none')
        }
    })
    
    Object.keys(data).forEach(function (key) {
        const value = data[key]
        if (value === '' || value === null) {
            formIsValid = false
            if (document.getElementById(`${key}-message-error`)) {
                document.getElementById(`${key}-message-error`).classList.remove('d-none')
            }
        }
    })

    console.log(formIsValid)

    if (!formIsValid) {
        return
    }

    // Adiciona o usuário ao array e logo depois ao Localstorage convertendo os dados com o JSON.stringify
    users.push(data)
    localStorage.setItem('users', JSON.stringify(users))

    // Cria um elemento html "tr" dinamicamente
    const tr = document.createElement('tr')

    // Adiciona celulas a "tr" criada anteriormente
    tr.innerHTML = `
        <td> ${data.name} </td>
        <td> ${data.surname} </td>
        <td> ${data.birthdate} </td>
        <td> ${data.email} </td>
        <td> ${data.phone} </td>
        <td> ${data.cpf} </td>
        <td> <button class="btn btn-danger btn-sm" type="button" onclick="deleteUser('${data.cpf}')"> Deletar </button></td>
    `
    // Adiciona a "tr" ao tboby
    tableBody.appendChild(tr)
    // Limpa o form
    forAddUser.reset()
})