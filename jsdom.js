var nombre = "";
var apellido = "";
var telefono = "";
var correo = "";

function recuperarDatos() {
    nombre = document.getElementById("nombre").value;
    apellido  = document.getElementById("apellido").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;

    var contenedores = document.getElementsByTagName("div");
    console.log(contenedores);
    if(contenedores.length > 0) {
    document.body.removeChild(contenedores[0]);
    }
    var contenedor = document.createElement("div");
    document.body.appendChild(contenedor);
    var parrafoNombre = document.createElement("p");
    var contenidoParrafoNombre = document.createTextNode ("Su nombre es: " + nombre);
    parrafoNombre.appendChild(contenidoParrafoNombre);
    var parrafoApellido = document.createElement("p");
    var contenidoParrafoApellido = document.createTextNode("Su apellido es: " + apellido);
    parrafoApellido.appendChild(contenidoParrafoApellido);
    var parrafoTelefono = document.createElement("p");
    var contenidoParrafoTelefono = document.createTextNode ("Su telefono es: " + telefono);
    parrafoTelefono.appendChild(contenidoParrafoTelefono);
    var parrafoCorreo = document.createElement("p");
    var contenidoParrafoCorreo = document.createTextNode ("Su correo es: " + correo);
    parrafoCorreo.appendChild(contenidoParrafoCorreo);
    var divContenedor = document.getElementsByTagName("div");
    divContenedor [0].appendChild (parrafoNombre);
    divContenedor [0].appendChild(parrafoApellido);
    divContenedor [0].appendChild(parrafoTelefono);
    divContenedor [0].appendChild(parrafoCorreo);
    console.log(nombre, apellido, telefono, correo);
    }