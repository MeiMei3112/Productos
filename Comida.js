class Comida extends PRoducto{
    tipo;
    caducidad;
    peso;
    ingredientes;
    constructor(tp,cdcdd,ps,ingrdnts)
    super(){
    this.tipo = tp;
    this.caducidad = cdcdd;
    this.peso = ps;
    this.ingredientes = ingrdnts;
    }
}