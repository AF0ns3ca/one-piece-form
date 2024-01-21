// const $ = id => {return document.querySelector(id);}
const formulario = document.querySelector('#form');
const errores = document.querySelector('#errores');
const nombre = document.querySelector('#nombre');
const apellidos = document.querySelector('#apellidos');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const volver = document.querySelector('.volver-btn');

let mensajesErrores = 0;

const validar = (e) => {
    
    e.preventDefault();
    mensajesErrores = 0;   

    //En este caso se hara en forma de if's en lugar de otro tipo de estructuras porque queremos quese muestren los mensajes de error en el propio formulario y no en una lista en el apartado inferior
    if (nombre.value.trim().length === 0 || nombre.classList.contains('error')) {
        nombre.value = "Nombre es un campo obligatorio"
        nombre.classList.add('error')
        mensajesErrores++
    } 
    if (apellidos.value.trim().length === 0 || apellidos.classList.contains('error')) {
        apellidos.value = "Apellidos es un campo obligatorio"
        apellidos.classList.add('error')
        mensajesErrores++
    } 
    if (email.value.trim().length === 0 || email.classList.contains('error')) {
        email.value = "El email es un campo obligatorio"
        email.classList.add('error')
        mensajesErrores++
    } 
    if (telefono.value.trim().length === 0 || telefono.classList.contains('error')) {
        telefono.value = "El telefono es un campo obligatorio"
        telefono.classList.add('error')
        mensajesErrores++
    } 
    if (mensaje.value.trim().length < 10 || mensaje.classList.contains('error')) {
        mensaje.value = "El mensaje es un campo obligatorio y debe tener al menos 10 caracteres"
        mensaje.classList.add('error')
        mensajesErrores++
    }

    console.log(mensajesErrores)
    //ENVIAR O MOSTRAR MENSAJES DE ERROR

    if (mensajesErrores <= 0 && confirm ("¿Estás seguro de enviar el formulario?")){
        formulario.submit()
        limpiarCampos()
        mensajesErrores = 0
    } 
    else if (mensajesErrores > 0) {
        console.log(mensajesErrores)
    }
};

//Creamos una funcion que se encargue de quitar la clase error y el texto de error cuando el usuario haga click en el input
const quitarError = (e) => {
    if(e.target.classList.contains('error')){
    e.target.classList.remove('error')
    e.target.value = ""
    }
}

//Funcion para limpiar los campos del formulario
const limpiarCampos = () => {
    // si alguno de los campos del formulario tiene la clase error, borramos su contenido y la clase error
    nombre.classList.contains('error') && (nombre.value = "", nombre.classList.remove('error'));
    apellidos.classList.contains('error') && (apellidos.value = "", apellidos.classList.remove('error'));
    telefono.classList.contains('error') && (telefono.value = "", telefono.classList.remove('error'));
    email.classList.contains('error') && (email.value = "", email.classList.remove('error'));
    mensaje.classList.contains('error') && (mensaje.value = "", mensaje.classList.remove('error'));
}

    
  

volver.addEventListener('click', () => {
    window.location.href = "../index.html";
})
nombre.addEventListener('click', quitarError)
apellidos.addEventListener('click', quitarError)
telefono.addEventListener('click', quitarError)
email.addEventListener('click', quitarError)
mensaje.addEventListener('click', quitarError)
formulario.addEventListener('submit', validar)

