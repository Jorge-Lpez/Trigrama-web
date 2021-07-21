const name2 = document.querySelector("#name");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const mensaje = document.querySelector("#menssaje");
const tipoServicio = document.querySelector("#select");
const enviar = document.querySelector("#enviar");
const formulario = document.querySelector("form");

myApp();

const datos = {
    nombre: "",
    apellido: "",
    telefono: "",
    mensaje: "",
    correo: "",
    tipoServicio: ""
}

function myApp(){

    /*Evento en button enviar */
    enviar.addEventListener("click", submitEnviar);

    /* Eventos en los campos y select */
    name2.addEventListener("input", obtenerDatos);
    last.addEventListener("input", obtenerDatos);
    email.addEventListener("input", obtenerDatos);
    tel.addEventListener("input", obtenerDatos);
    mensaje.addEventListener("input", obtenerDatos);
}

function obtenerDatos(e){
    datos.tipoServicio = tipoServicio.value;
    datos[e.target.name] = e.target.value;
    //console.log(datos);
}

async function submitEnviar(e){

    e.preventDefault();
    // Validar que todos los campos esten llenos 
    //console.log(Object.values(datos));
    if( !(Object.values( datos ).every( variable => variable != ""))  ){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son obligatorios!'
        })
        return;
    }

    try {
        Swal.fire({
            icon: 'success',
            title: 'Correo Enviado',
            text: 'Pronto nos contactaremos contigo.',
            confirmButtonText: `Aceptar`
        });
        // Enviar http://localhost:4000/
        const res = await axios.post("https://trigrama-server.herokuapp.com/correo", datos);
    } catch (error) {
        console.log(error);
    }

    //Limpiar formulario
    formulario.reset();
    //Limpiar objeto de datos
    LimpiarObjeto();
    //Enviar a pagina principal
    window.location.href="/";
}


function LimpiarObjeto(){
    datos.nombre = "";
    datos.apellido = "";
    datos.telefono = "";
    datos.mensaje = "";
    datos.tipoServicio = "";
    datos.correo = "";
}