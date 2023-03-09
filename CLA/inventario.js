// Constructor de la clase, recibe un objeto con los productos
constructor(productos = {}); {
  // Inicializa el objeto productos
  this.productos = {};
  // Recorre los productos recibidos y los agrega al objeto productos
  for (const nombre in productos) {
    const producto = productos[nombre];
    this.productos[nombre] = new Producto(producto.nombre, producto.cantidad, producto.precio);
  }
}

// Método para agregar un producto al inventario
agregarProducto(nombre, cantidad, precio); {
  // Crea un objeto Producto con los datos recibidos
  const producto = new Producto(nombre, cantidad, precio);
  // Agrega el producto al objeto productos
  this.productos[nombre] = producto;
}

// Método para eliminar un producto del inventario
eliminarProducto(nombre); {
  // Elimina el producto del objeto productos
  delete this.productos[nombre];
}

// Método para buscar un producto en el inventario
buscarProducto(nombre); {
  // Retorna el objeto Producto con el nombre recibido
  return this.productos[nombre];
}

// Método para actualizar la cantidad de un producto en el inventario
actualizarCantidad(nombre, cantidad); {
  // Busca el producto por su nombre
  const producto = this.buscarProducto(nombre);
  // Actualiza la cantidad del producto
  producto.cantidad = cantidad;
}

// Método para calcular el valor total del inventario
calcularValorInventario(); {
  
  // Inicializa el valor total en cero
  let valorTotal = 0;
  
  // Recorre los productos y suma el valor de cada uno al valor total
  for (const nombre in this.productos) {
    const producto = this.productos[nombre];
    valorTotal += producto.calcularValor();
  }
  
  // Retorna el valor total del inventario
  return valorTotal;
}
