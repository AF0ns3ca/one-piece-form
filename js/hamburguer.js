/**
 * @author Álvaro Fonseca Hernández
 * @GitHub https://github.com/AF0ns3ca/one-piece-form.git
 */

const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir-menu');
const cerrar = document.querySelector('#cerrar-menu');

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
});
