const btnAddUser = document.getElementById('btn-add-user')

btnAddUser.addEventListener('click', function () {
    const forAddUser = document.getElementById('form-add-user')

    const formData = new FormData(forAddUser)   
    const data = Object.fromEntries(formData)

    const newDate = new Date(data.birthdate)

    const tmzDiff = new Date().getTimezoneOffset() / 60
    const localTmz = 24 + tmzDiff

    const birthdateToDateFormat = new Date(Date.UTC(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), localTmz))

    const dateBirthdateFormated = new Intl.DateTimeFormat("pt-BR").format(birthdateToDateFormat)

    const tableBody = document.getElementById('table-boby')
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
    forAddUser.reset()
})