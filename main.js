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

function producto (){
    const producto = new Comida('Juan', 30);
localStorage.setItem('myObject', JSON.stringify(producto));


const storedData = localStorage.getItem('myObject');


if (!storedData) {
  console.log('No hay datos disponibles');
} else {

  const parsedData = JSON.parse(storedData);


  console.log(`Nombre: ${parsedData.name}, Edad: ${parsedData.age}`);
}
}