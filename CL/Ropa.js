class Ropa extends Producto{
    talla;
    color;
    modelo;
    tipoTela;
    temporada;
    constructor(tll, clr, mdl, tt,tmprd){
        super(prc,np,cb,mrc,ar);
        this.talla = tll;
        this.color = clr;
        this.modelo = mdl;
        this.tipoTela = tt;
        this.temporada = tmprd;
    }
}
function eliminarRopa(idRopa){
    let result = ropa.findIndex(({ id }) => id === idRopa);
    if(result > -1){
        Ropa.splice(result, 1);
      }
    Tool.setDataToLocalStorage('ropa', Ropa);
    window.location.reload();
}
