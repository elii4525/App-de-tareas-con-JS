//Arreglo donde se iran guardando las tareas 
let tareas = [];

//Referencias a elementos del DOM
//Apuntamos a los elementos del HTML para poder manipularlos desde JavaScript 

const txtTarea = document.getElementById("txtTarea");
const prioridad = document.getElementById("prioridad");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");
const contador = document.getElementById("contador");

//Llamaremos a la funcion "agregarTarea" cada vez que se haga click en el boton "Agregar"
btnAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {
    const nombreTarea = txtTarea.value.trim();
    const prioridadTarea = prioridad.value;

    if(nombreTarea == "" || prioridadTarea == "") {
        Swal.fire({
            icon: "warning",
            title: "Campos incompletos",
            text: "Debes escribir una tarea y seleccionar una prioridad.",
            confirmButtonText: 'Aceptar'
        });
    }

    const tarea = {
        nombre: nombreTarea,
        prioridad: prioridadTarea,
    };

    tareas.push(tarea);

    mostrarTareas();
    limpiarFormulario();
}