const btnAddUser = document.getElementById('btn-add-user')

btnAddUser.addEventListener('click',function() {
    const formAddUser = document.getElementById('form-add-user')
    // console.log('Aqui temos apenas o nosso formulário "cru":', formAddUser)

    const formData = new FormData(formAddUser)
    // formData.append('user_admin', false) adiciona 
    // console.log('Aqui temos uma conversão para tratarmos nosso formulário:', formData)

    const data = Object.fromEntries(formData)

    const newDate = new Date(data.birthdate)

    const tmzDiff = new Date().getTimezoneOffset() / 60
    const localTmz = 24 + tmzDiff

    const birthdateToDateFormat = new Date(Date.UTC(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), localTmz))

    const dateBirthdateFormat = new Intl.DateTimeFormat('pt-BR',).format(birthdateToDateFormat)

    const tableBody = document.getElementById('table-body')
    const tr = document.createElement('tr')

    tr.innerHTML = `
        <td> ${data.name} </td>
        <td> ${data.surname} </td>
        <td> ${dateBirthdateFormat} </td>
        <td> ${data.email} </td>
        <td> ${data.phone} </td>
        <td> ${data.cpf} </td>
    `

    tableBody.appendChild(tr)
    formAddUser.reset()
})