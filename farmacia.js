class Farmacia extends Producto{
    contenido;
    tipo_de_administracion;
    solo_con_receta;
    tipo_de_pureza;
    constructor (cont, tipoad, receta, tipopurez){
    this.Contenido = cont;
    this.Tipo_de_administrador = tipoad;
    this.Solo_con_receta = receta;
    this.Tipo_de_pureza = tipopurez;
    }
}
function eliminarFarmacia(idFarmacia){
    let result = farmacia.findIndex(({ id }) => id === idFarmacia);
    if(result > -1){
        Farmacia.splice(result, 1);
      }
    Tool.setDataToLocalStorage('farmacia', Farmacia);
    window.location.reload();
  }