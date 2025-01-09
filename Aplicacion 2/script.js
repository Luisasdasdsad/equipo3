const userForm = document.getElementById('userForm');
const userTableBody = document.getElementById('userTableBody');

let users = []; // Lista de usuarios
let editingIndex = null; // Índice del usuario que se está editando

// Función para renderizar la tabla
function renderTable() {
    userTableBody.innerHTML = ''; // Limpia la tabla
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button onclick="editUser(${index})">Editar</button>
                <button onclick="deleteUser(${index})">Eliminar</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
}

// Función para agregar o actualizar un usuario
userForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;

    if (editingIndex !== null) {
        // Actualizar usuario existente
        users[editingIndex] = { name, email, role };
        editingIndex = null; // Resetear el índice de edición
    } else {
        // Agregar nuevo usuario
        users.push({ name, email, role });
    }

    renderTable();
    userForm.reset(); // Reinicia el formulario
});

// Función para editar un usuario
function editUser(index) {
    const user = users[index];
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('role').value = user.role;

    editingIndex = index; // Establece el índice del usuario que se edita
}

// Función para eliminar un usuario
function deleteUser(index) {
    users.splice(index, 1);
    renderTable();
}
