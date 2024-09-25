// scripts.js
function toggleDescription(button) {
    const description = button.closest('div').nextElementSibling;
    if (description.classList.contains('hidden')) {
        description.classList.remove('hidden');
        button.textContent = 'Cerrar Descripción';
    } else {
        description.classList.add('hidden');
        button.textContent = 'Descripción';
    }
}
