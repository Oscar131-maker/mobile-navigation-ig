
//Variables
const btnMenu = document.querySelector('#abrir-menu');
const btnCerrar = document.querySelector('#cerrar-menu');
const menu = document.querySelector('.menu');

//Abrir menú
btnMenu.addEventListener('click', () => {
    menu.style.right = "0";
    menu.style.transition = "500ms";
});
// Cerrar menú
btnCerrar.addEventListener('click', () => {
    menu.style.right = "-100%";
    menu.style.transition = "500ms";
});
