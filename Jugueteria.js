class Jugeteria extends Producto{
    material;
    rango_edad;
    categoria;
    genero;
    constructor(mtrl,rg,ctgr,gen){
    super(prc,np,cb,mrc,ar);
    this.material = mtrl;
    this.rango_edad = rg;
    this.categoria = ctgr;
    this.genero = gen;
    }
}