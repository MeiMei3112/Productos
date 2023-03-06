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
function eliminarComida(idComida){
    let result = Comida.findIndex(({ id }) => id === idComida);
    if(result > -1){
        comida.splice(result, 1);
      }
    Tool.setDataToLocalStorage('comida', Comida);
    window.location.reload();
}
