class Comida extends Producto{
    tipo;
    caducidad;
    peso;
    ingredientes;
    constructor(tp,cdcdd,ps,ingrdnts){
    this.tipo = tp;
    this.caducidad = cdcdd;
    this.peso = ps;
    this.ingredientes = ingrdnts;
    }
}