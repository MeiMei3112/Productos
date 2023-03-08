class Supermercado {
  constructor() {
    const inventario = JSON.parse(localStorage.getItem('inventario'));
    this.inventario = inventario ? new Inventario(inventario) : new Inventario();
  }

  agregarProducto(nombre, cantidad, precio) {
    this.inventario.agregarProducto(nombre, cantidad, precio);
    this.guardarInventario();
  }

  eliminarProducto(nombre) {
    this.inventario.eliminarProducto(nombre);
    this.guardarInventario();
  }

  buscarProducto(nombre) {
    return this.inventario.buscarProducto(nombre);
  }

  actualizarCantidad(nombre, cantidad) {
    this.inventario.actualizarCantidad(nombre, cantidad);
    this.guardarInventario();
  }

  calcularValorInventario() {
    return this.inventario.calcularValorInventario();
  }

  guardarInventario() {
    localStorage.setItem('inventario', JSON.stringify(this.inventario));
  }
}

class Inventario {
  constructor(productos = {}) {
    this.productos = {};
    for (const nombre in productos) {
      const producto = productos[nombre];
      this.productos[nombre] = new Producto(producto.nombre, producto.cantidad, producto.precio);
    }
  }

  agregarProducto(nombre, cantidad, precio) {
    const producto = new Producto(nombre, cantidad, precio);
    this.productos[nombre] = producto;
  }

  eliminarProducto(nombre) {
    delete this.productos[nombre];
  }

  buscarProducto(nombre) {
    return this.productos[nombre];
  }

  actualizarCantidad(nombre, cantidad) {
    const producto = this.buscarProducto(nombre);
    producto.cantidad = cantidad;
  }

  calcularValorInventario() {
    let valorTotal = 0;
    for (const nombre in this.productos) {
      const producto = this.productos[nombre];
      valorTotal += producto.calcularValor();
    }
    return valorTotal;
  }
}

class Producto {
  constructor(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }

  getNombre() {
    return this.nombre;
  }

  getCantidad() {
    return this.cantidad;
  }

  getPrecio() {
    return this.precio;
  }

  calcularValor() {
    return this.cantidad * this.precio;
  }
}