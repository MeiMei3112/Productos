function login(){
    var nombre, password, apellido

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    password = document.getElementById("contraseña").value;

    if(nombre == "El mas" && apellido == "Psint" && password == "1234"){
        alert("Bienvenido prro")
        window.location = "index2.html";
    } else{
        alert("Usuario o contraseña incorrecto")
    }
}