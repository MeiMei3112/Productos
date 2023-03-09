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
  