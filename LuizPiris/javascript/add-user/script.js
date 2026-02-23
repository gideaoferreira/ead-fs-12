// REGRAS BASICAS DE CPF
// 1. O CPF deve conter 11 dígitos 

const inputCpf = document.getElementById('cpf')
inputCpf.addEventListener('input', function (event) {
    let cpf = event.target.value.replace(/\D/g, '').slice(0, 11)

    cpf = cpf
        .replace(/^(\d{3})(\d)/, '$1.$2')
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1-$2')

    inputCpf.value = cpf
})

// inputCpf.addEventListener('input', function (event) {
//     cpf = event.target.value
//         .replace(/\D/g, '')
//         .replace(/(\d{3})(\d)/, '$1.$2')
//         .replace(/(\d{3})(\d)/, '$1.$2')
//         .replace(/(\d{3})(\d)/, '$1.$2')
//         .replace(/\.(?=[^.]*$)/, '-')
//         .slice(0, 14)

//     // const re = /\./g;
//     // while (re.test(cpf)) {}

//     // if (RegExp.lastMatch) {
//     //     const index = cpf.lastIndexOf(RegExp.lastMatch)
//     //     cpf = cpf.slice(0, index) + '-' + cpf.slice(index + 1)
//     // }
    
//     inputCpf.value = cpf
// })


// Evento de input para formatar o CPF enquanto o usuário digita, usando Regex

// inputCpf.addEventListener('input', function (event) {
//     let cpf = event.target.value.replace(/\D/g, '');

//     if (cpf.length > 11) {
//         cpf = cpf.slice(0, 11);
//     }

//     if (cpf.length >= 9) {
//         cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2}).*/, '$1.$2.$3-$4');
//     } else if (cpf.length >= 6) {
//         cpf = cpf.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, '$1.$2.$3');
//     } else if (cpf.length >= 3) {
//         cpf = cpf.replace(/^(\d{3})(\d{0,3}).*/, '$1.$2');
//     }
    
//     inputCpf.value = cpf
// })

// Evento de input para formatar o CPF depois que o usuário digita tudo, usando slice

// const inputCpf = document.getElementById('cpf')

// inputCpf.addEventListener('input', function (event) {
//     let cpf = event.target.value.replace(/\D/g, '');

//     if (cpf.length >= 11) {
//         cpf = cpf.slice(0, 11)
//         const cpfPart1 = cpf.slice(0, 3)
//         const cpfPart2 = cpf.slice(3, 6)
//         const cpfPart3 = cpf.slice(6, 9)
//         const cpfPart4 = cpf.slice(9)
//         cpf = `${cpfPart1}.${cpfPart2}.${cpfPart3}-${cpfPart4}`
//     }

//     inputCpf.value = cpf
// })

const inputPhone = document.getElementById('phone')
inputPhone.addEventListener('input', function (event) {
    let phone = event.target.value.replace(/\D/g, '').slice(0, 11)

    phone = phone
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/ (\d{5})(\d)/, ' $1-$2')
        
    inputPhone.value = phone
})

// inputPhone.addEventListener('input', function (event) {
//     let phone = event.target.value.replace(/\D/g, '');

//     if (phone.length >= 11) {
//         phone = phone.slice(0, 11)
//         const phonePart1 = phone.slice(0, 2)
//         const phonePart2 = phone.slice(2, 7)
//         const phonePart3 = phone.slice(7)
//         phone = `(${phonePart1}) ${phonePart2}-${phonePart3}`
//     }

//     inputPhone.value = phone
// })

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