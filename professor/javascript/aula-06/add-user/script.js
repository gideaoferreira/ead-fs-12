const tableBody = document.getElementById('table-body')
let users = []
let formIsValid = true

/**
 * Formata o cpf no momento da edição de usuário
 */
const inputUserCpf = document.getElementById('user-cpf')
inputUserCpf.addEventListener('input', function (event) {
    let cpf = event.target.value.replace(/\D/g, '').slice(0, 11)

    cpf = cpf
        .replace(/^(\d{3})(\d)/, '$1.$2')
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1-$2')
    
    inputUserCpf.value = cpf
})

/**
 * Formata o cpf no momento da criação de usuário
 */
const inputCpf = document.getElementById('cpf')
inputCpf.addEventListener('input', function (event) {
    let cpf = event.target.value.replace(/\D/g, '').slice(0, 11)

    cpf = cpf
        .replace(/^(\d{3})(\d)/, '$1.$2')
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1-$2')
    
    inputCpf.value = cpf
})

/**
 * Formata o telefone no momento da edição de usuário
 */
const inputUserPhone = document.getElementById('user-phone')
inputUserPhone.addEventListener('input', function (event) {
    let phone = event.target.value.replace(/\D/g, '').slice(0, 11)

    phone = phone
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/ (\d{5})(\d)/, ' $1-$2')
    
    inputUserPhone.value = phone
})

/**
 * Formata o telefone no momento da criação de usuário
 */
const inputPhone = document.getElementById('phone')
inputPhone.addEventListener('input', function (event) {
    let phone = event.target.value.replace(/\D/g, '').slice(0, 11)

    phone = phone
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/ (\d{5})(\d)/, ' $1-$2')
    
    inputPhone.value = phone
})

/**
 * Nesse ponto estamos criando a tabela sempre que a página for carregada.
 *  - Pegamos os dados do localStora
 *  - Renderizamos a tabela com todos os dados do localStorage
 */
let data = JSON.parse(localStorage.getItem('users'))
if (data) {
    data.forEach(function (user) {
        users.push(user)
        renderTable(user)
    })
}

/**
 * Ação para realizar a substituição dos dados do usário - update/edit
 * - Valida o form para ver se tudo froi preenchido
 * - Substitui os dados do usuário
 * - limpa a tabela
 * - Atualiza o localStorage
 * - Renderiza a tabela com os novos dados
 * 
 */
const btnEditUser = document.getElementById('btn-edit-user')
btnEditUser.addEventListener('click', function () {
    formIsValid = true
    const formEditUser = document.getElementById('form-edit-user')

    const formData = new FormData(formEditUser)
    const userData = Object.fromEntries(formData)

    Object.keys(userData).forEach(function (key) {
        if (document.getElementById(`${key}-edit-message-error`)) {
            document.getElementById(`${key}-edit-message-error`).classList.add('d-none')
        }
    })
    
    Object.keys(userData).forEach(function (key) {
        const value = userData[key]

        if (value === '' || value === null) {
            formIsValid = false
            if (document.getElementById(`${key}-edit-message-error`)) {
                document.getElementById(`${key}-edit-message-error`).classList.remove('d-none')
            }
        }
    })

    if (!formIsValid) {
        return
    }

    users = data.map(function (user) {
        if (user.id === userData.id) {
            user = userData
        }

        return user
    })

    tableBody.innerHTML = ''
    localStorage.setItem('users', JSON.stringify(users))
    users.forEach((user) => {
        renderTable(user)
    })
})

/**
 * Popula os valos com os dados do usuário que precisa ser editado nos inputs do formulário de edição de usuário
 * Inicializa o modal do Bootstrap e abre o modal
 * 
 * 
 * @param user 
 */
function openEditUserModal(user) {
    const userName = document.getElementById('user-name')
    const userSurname = document.getElementById('user-surname')
    const userCpf = document.getElementById('user-cpf')
    const userBirthdate = document.getElementById('user-birthdate')
    const userPhone = document.getElementById('user-phone')
    const userEmail = document.getElementById('user-email')
    const userId = document.getElementById('user-id')

    userName.value = user.name
    userSurname.value = user.surname
    userCpf.value = user.cpf
    userBirthdate.value = user.birthdate
    userPhone.value = user.phone
    userEmail.value = user.email
    userId.value = user.id

    const editUserModal = document.getElementById('editUserModal')
    const bsModal = new bootstrap.Modal(editUserModal)
    bsModal.show()
}

/**
 * Deleta um usuário baseado no seu ID
 * Atualiza o localStorage com a lista de usuário
 * Renderiza a tabela novamente
 * 
 */
function deleteUser(userId) {
    users = users.filter(function (user) {
        if (user.id !== userId) {
            return user
        }
    })

    localStorage.setItem('users', JSON.stringify(users))
    tableBody.innerHTML = ''
    users.forEach(function (user) {
        renderTable(user)
    })
}

/**
 * Esta função adiciona um usuário
 *  - Captura dos dados da form
 *  - Cria um id unico para ele usando a função nativa do JS crypto.randomUUID()
 *  - Valida se os campos foram preenchidos
 *  - Atualiza o localstorage com o novo usuário
 *  - Reseta o formulário
 * 
 */
const btnAddUser = document.getElementById('btn-add-user')
btnAddUser.addEventListener('click', function () {
    formIsValid = true
    const formAddUser = document.getElementById('form-add-user')
    
    const formData = new FormData(formAddUser)
    formData.set('id', crypto.randomUUID())
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

    if (!formIsValid) {
        return
    }

    users.push(data)
    localStorage.setItem('users', JSON.stringify(users))

    renderTable(data)

    formAddUser.reset()
})


/**
 * Essa função atualizada um elemento a tabela
 * 
 * @param user 
 */
function renderTable(user) {
    const tr = document.createElement('tr')
    tr.innerHTML = `
        <td> ${user.id} </td>
        <td> ${user.name} </td>
        <td> ${user.surname} </td>
        <td> ${user.birthdate} </td>
        <td> ${user.email} </td>
        <td> ${user.phone} </td>
        <td> ${user.cpf} </td>
        <td>
            <button class="btn btn-info btn-sm" type="button" onclick='openEditUserModal(${JSON.stringify(user)})'> Editar </button>
            <button class="btn btn-danger btn-sm" type="button" onclick="deleteUser('${user.id}')"> Deletar </button>
        </td>
    `
    tableBody.appendChild(tr)
}