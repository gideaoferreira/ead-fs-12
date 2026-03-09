const btnAddUser = document.getElementById('btn-add-user')

btnAddUser.addEventListener('click', function() {
    const formAddUser = document.getElementById('form-add-user')

    const formData = new FormData(formAddUser)
    const data = Object.fromEntries(formData)

    const birthdateToDateFormat = new Date(data.birthdate)
    const dateBirthdateFormated = new Intl.DateTimeFormat("pt-BR"). format(birthdateToDateFormat)

    const tableBody = document.getElementById('table-body')
    const tr = document.createElement('tr')

    tr.innerHTML = `
        <td> ${data.name} </td>
        <td> ${data.surname} </td>
        <td> ${dateBirthdateFormated} </td>
        <td> ${data.email} </td>
        <td> ${data.phone} </td>
        <td> ${data.cpf} </td>

    `

    tableBody.appendChild(tr)
    formAddUser.reset()
})