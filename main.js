//Funcion para ingresar a la pagina
function login(){
    var nombre, password, apellido

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    password = document.getElementById("contraseña").value;

    if(nombre == "E" && apellido == "l" && password == "1234"){
        alert("Bienvenido a los mas Belicos de la Upt")
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
  // Función para guardar datos en LocalStorage
  function guardarDatos(e) {
    e.preventDefault(); // Evita que se recargue la página al enviar el formulario
    
    // Obtener los datos ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;
    
    // Guardar los datos en LocalStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('edad', edad);
    localStorage.setItem('email', email);
    
    alert('Datos guardados correctamente');
    
    // Limpiar el formulario
    document.getElementById('formulario').reset();
  }
  
  // Escuchar el evento submit del formulario
  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', guardarDatos);
</script>
}
