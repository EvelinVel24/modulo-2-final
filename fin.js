document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact-form');
    
    // Validación personalizada y mensajes
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener valores del formulario
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // Validación simple
        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Mostrar mensaje de éxito
        alert('Formulario enviado con éxito!');
        // Opcional: Limpiar el formulario
        contactForm.reset();
    });

    // Función para validar formato de correo electrónico
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Ejemplo de interactividad adicional
    document.querySelector('.btn-primary').addEventListener('mouseover', function() {
        this.style.backgroundColor = '#0056b3';
    });

    document.querySelector('.btn-primary').addEventListener('mouseout', function() {
        this.style.backgroundColor = '#007bff';
    });
});
