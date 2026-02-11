const btnAddUser = document.getElementById('btn-add-user');
const tableBody = document.getElementById('table-body');
let users = []

if (users = JSON.parse(localStorage.getItem('users'))) {
    users.forEach(function (user) {;
        const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${user.name}</td>
                <td>${user.surname}</td>
                <td>${user.birthDate}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.cpf}</td>
            `;
        tableBody.appendChild(tr);
    });
}

btnAddUser.addEventListener('click', function () {
    const forAddUser = document.getElementById('form-add-user');

    const formData = new FormData(forAddUser);
    const data = Object.fromEntries(formData);

    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));

    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${data.name}</td>
        <td>${data.surname}</td>
        <td>${data.birthDate}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
        <td>${data.cpf}</td>
    `;

    tableBody.appendChild(tr);
    forAddUser.reset();
})