
const supermercado = new Supermercado();

function agregarProducto() {
const nombre = document.getElementById("nombre").value;
const cantidad = parseInt(document.getElementById("cantidad").value);
const precio = parseFloat(document.getElementById("precio").value);
supermercado.agregarProducto(nombre, cantidad, precio);

// Guardar el inventario en el Local Storage
localStorage.setItem("inventario", JSON.stringify(supermercado.inventario));

// Mostrar una alerta de éxito
alert("El producto se ha agregado exitosamente.");
}

function eliminarProducto() {
  const nombre = document.getElementById("nombre-eliminar").value;
  supermercado.eliminarProducto(nombre);
}

function buscarProducto() {
const nombre = document.getElementById("nombre-buscar").value;
const producto = supermercado.buscarProducto(nombre);
const resultado = document.getElementById("resultado-buscar");

if (producto) {
resultado.innerText = `Producto encontrado: ${producto.getNombre()}, Cantidad: ${producto.getCantidad()}, Precio: ${producto.getPrecio()}`;
} else {
resultado.innerText = "Producto no encontrado";
}

// guardar inventario actualizado en localStorage
supermercado.guardarInventario();
}


function actualizarCantidad() {
  const nombre = document.getElementById("nombre-actualizar").value;
  const cantidad = parseInt(document.getElementById("cantidad-actualizar").value);
  supermercado.actualizarCantidad(nombre, cantidad);
}

function mostrarValorInventario() {
const valor = supermercado.calcularValorInventario();
const resultado = document.getElementById("valor-inventario");
resultado.innerText = `Valor del inventario: $${valor.toFixed(2)}`;

// Mostrar el inventario guardado en el Local Storage
const inventarioGuardado = JSON.parse(localStorage.getItem("inventario"));
if (inventarioGuardado) {
console.log("Inventario guardado en el Local Storage:", inventarioGuardado);
}
}


  // Función para guardar datos en LocalStorage
  function guardarDatos(e) {
  e.preventDefault(); // Evita que se recargue la página al enviar el formulario
  
  // Obtener los datos ingresados por el usuario
  const nombre = document.getElementById('nombre').value;
  const cantidad = document.getElementById('cantidad').value;
  const precio = document.getElementById('precio').value;
  
  // Guardar los datos en LocalStorage
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('precio', precio);
  localStorage.setItem('cantidad', cantidad);
  
  alert('Datos guardados correctamente');
  
  // Limpiar el formulario
  document.getElementById('formulario').reset();
}

mostrarValorInventario(); // Actualizar el valor del inventario al cargar la página
