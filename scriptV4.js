
const estilo_normal = document.getElementById('estilo_normal');
const estilo_contraste = document.getElementById('estilo_contraste');
const body = document.body;
const form = document.getElementById('personalForm');

// Funciones para cambiar el estilo
estilo_normal.addEventListener('click', () => {
    body.classList.remove('alto-contraste');
});

estilo_contraste.addEventListener('click', () => {
    body.classList.add('alto-contraste');
});

// Manejo del envío del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    alert(`¡Gracias, ${nombre}! El formulario ha sido validado correctamente.`);
});