class Tecnologia extends Producto{
    modelo;
    color;
    dimension;
    conexion;
    garantia;
    constructor(mdl,clr,dmnsn,cnxn,grnt)
    super(){
        this.modelo = mdl;
        this.color = clr;
        this.dimension = dmnsn;
        this.conexion = cnxn;
        this.garantia = grnt;
    }
}
