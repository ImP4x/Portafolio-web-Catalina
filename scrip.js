// Seleccionar elementos boton de whasatapp
const whatsappButton = document.getElementById('whatsappButton');
const whatsappContent = document.getElementById('whatsappContent');

// Añadir evento de clic al botón
whatsappButton.addEventListener('click', () => {
    // Alternar la visibilidad del contenido
    if (whatsappContent.style.display === 'none' || whatsappContent.style.display === '') {
        whatsappContent.style.display = 'block'; // Mostrar el contenido
    } else {
        whatsappContent.style.display = 'none'; // Ocultar el contenido
    }
});

// Navbar responsive
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Efecto de scroll en la navbar
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth scrolling para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// formulario

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let asunto = document.getElementById("asunto").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || email === "" || telefono === "" || asunto === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        console.log({
            Nombre: nombre,
            Email: email,
            Teléfono: telefono,
            Asunto: asunto,
            Mensaje: mensaje
        });

        // Limpiar los campos del formulario después de enviar
        document.getElementById("contact-form").reset();

        // Mostrar una alerta o mensaje de éxito (opcional)
        alert("Mensaje enviado con éxito");
    });
});
