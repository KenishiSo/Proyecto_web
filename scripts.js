

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

document.addEventListener("DOMContentLoaded", function(){

    let formCompra = document.getElementById("formCompra");

    if(formCompra){

        formCompra.addEventListener("submit", function(event){

            event.preventDefault();

            let peluche = document.querySelector('input[name="peluche"]:checked');
            let direccion = document.getElementById("direccion").value.trim();
            let cantidad = document.getElementById("cantidad").value.trim();
            let metodoPago = document.getElementById("metodoPago").value;

            if(!peluche || direccion === "" || cantidad === "" || metodoPago === ""){

                alert("Debes completar todos los campos obligatorios para realizar la compra.");
                return;

            }

            alert("Compra completada correctamente. Gracias por comprar en Peluchinchispin.");
            
            formCompra.reset();

        });

    }

});