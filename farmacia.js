class Farmacia extends Producto{
    contenido;
    tipo_de_administracion;
    solo_con_receta;
    tipo_de_pureza;
    constructor (cont, tipoad, receta, tipopurez)
    super(){
    this.Contenido = cont;
    this.Tipo_de_administrador = tipoad;
    this.Solo_con_receta = receta;
    this.Tipo_de_pureza = tipopurez;
    }
}