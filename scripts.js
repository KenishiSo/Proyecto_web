

document.addEventListener("DOMContentLoaded", function(){

    let btnInicio = document.getElementById("btnInicio");
    let btnCatalogo = document.getElementById("btnCatalogo");
    let btnContacto = document.getElementById("btnContacto");

    btnInicio.addEventListener("click", function(event){

        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    btnCatalogo.addEventListener("click", function(event){

        event.preventDefault();

        document.getElementById("catalogo").scrollIntoView({
            behavior: "smooth"
        });

    });

    btnContacto.addEventListener("click", function(event){

        event.preventDefault();

        document.getElementById("contacto").scrollIntoView({
            behavior: "smooth"
        });

    });

});
function irLogin(){

    window.location.href = "login.html";

}

function agregarCarrito(nombre){

    alert(nombre + " fue agregado al carrito correctamente.");

    localStorage.setItem("pelucheSeleccionado", nombre);

    window.location.href = "compra.html";

}
function volverInicio(){

    window.location.href = "index.html";

}