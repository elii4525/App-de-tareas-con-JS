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

    if (nombreTarea == "" || prioridadTarea == "") {
        Swal.fire({
            icon: "warning",
            title: "Campos incompletos",
            text: "Debes escribir una tarea y seleccionar una prioridad.",
            confirmButtonText: 'Aceptar'
        });

        return;
    }

    let tarea = {
        nombre: nombreTarea,
        prioridad: prioridadTarea,
    };

    tareas.push(tarea);
    mostrarTareas();
    limpiarFormulario();
    actualizarContador();

    Swal.fire({
        icon: "success",
        title: "Tarea agregada",
        text: "La tarea se agregó correctamente.",
        confirmButtonText: "Aceptar"
    });

}

function mostrarTareas() {
    listaTareas.innerHTML = "";

    tareas.forEach(function (tarea, index) {
        listaTareas.innerHTML += `
        <article class="bg-light rounded-3 p-3 d-flex justify-content-between align-items-center">

            <div>
                <h5 class="mb-1">${tarea.nombre}</h5>
                <p class="mb-0 text-muted">Prioridad: ${tarea.prioridad}</p>
            </div>

            <div>
                <button class="btn btn-danger btn-sm" onclick="eliminarTarea(${index})">Eliminar</button>
            </div>

        </article>
        `;
    }); { }
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    mostrarTareas();
    actualizarContador();

    Swal.fire({
        icon: "success",
        title: "Tarea eliminada",
        text: "La tarea se eliminó correctamente.",
        confirmButtonText: "Aceptar"
    });

}

function limpiarFormulario() {
    txtTarea.value = "";
    prioridad.value = "";
    txtTarea.focus();
}

function actualizarContador() {
    contador.txtContent = `Total de tareas: ${tareas.length}`;
}
