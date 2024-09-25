function toggleDescription(button) {
    // Buscar la descripción en el mismo contenedor del botón
    const description = button.nextElementSibling;
    
    // Alternar la clase 'hidden' para mostrar u ocultar la descripción
    if (description.classList.contains('hidden')) {
        description.classList.remove('hidden');
        button.textContent = 'Cerrar Descripción'; // Cambiar el texto del botón
    } else {
        description.classList.add('hidden');
        button.textContent = 'Descripción'; // Restaurar el texto del botón
    }
}
