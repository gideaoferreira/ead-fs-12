const btnAddUser = document.getElementById('btn-add-user');

btnAddUser.addEventListener('click', function () {
    const forAddUser = document.getElementById('form-add-user');

    const formData = new FormData(forAddUser);
    const data = Object.fromEntries(formData);

    const birthDateToDateFormat = new Date(data.birthDate + 'T12:00:00');
    const dateBirthdateFormated = new Intl.DateTimeFormat("pt-BR").format(birthDateToDateFormat);

    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${data.name}</td>
        <td>${data.surname}</td>
        <td>${dateBirthdateFormated}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
        <td>${data.cpf}</td>
    `;

    tableBody.appendChild(tr);
    forAddUser.reset();
})