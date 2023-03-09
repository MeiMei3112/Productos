//Funcion para ingresar a la pagina
function login(){
    var nombre, password, apellido

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    password = document.getElementById("contraseña").value;

    if(nombre == "el" && apellido == "ps" && password == "12"){
        alert("Bienvenido a los mas Belicos de la Upt")
        window.location = "productos.html";
    } else{
        alert("Algun dato es incorrecto")
    }
}
