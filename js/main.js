// const $ = id => {return document.querySelector(id);}
const formulario = document.querySelector('#form');
const errores = document.querySelector('#errores');
const nombre = document.querySelector('#nombre');
const apellidos = document.querySelector('#apellidos');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

let mensajesErrores = [];

const validar = (e) => {
    
    e.preventDefault();
    mensajesErrores = [];
    
    nombre.value.trim().length === 0 && mensajesErrores.push('El nombre es un campo obligatorio')
    apellidos.value.trim().length === 0 && mensajesErrores.push('El apellido es un campo obligatorio')
    email.value.trim().length === 0 && mensajesErrores.push('El email es un campo obligatorio')
    mensaje.value.trim().length === 0 && mensajesErrores.push('El mensaje es un campo obligatorio')
    mensaje.value.trim().length < 10 && mensajesErrores.push('El mensaje debe tener al menos 10 caracteres')

    //ENVIAR O MOSTRAR MENSAJES DE ERROR

    if (mensajesErrores.length === 0 && confirm ("¿Estás seguro de enviar el formulario?")){
        formulario.submit()
    } else if (mensajesErrores.length > 0) {
        errores.textContent = ""
        console.log(mensajesErrores)
        mensajesErrores.forEach(function(mensaje){
            const miLi = document.createElement('li')
            miLi.textContent = mensaje
            errores.appendChild(miLi)
        })
    }
};

formulario.addEventListener('submit', validar)