class Tecnologia extends Producto{
    modelo;
    idTecnologia;
    color;
    dimension;
    conexion;
    garantia;
    constructor(mdl,clr,dmnsn,cnxn,grnt,idtecg){
        this.modelo = mdl;
        this.color = clr;
        this.dimension = dmnsn;
        this.conexion = cnxn;
        this.garantia = grnt;
        this.idTecnologia = idtecg;
  }
}
function eliminarTecnologia(idTecnologia){
  let result = tecnologia.findIndex(({ id }) => id === idTecnologia);
  if(result > -1){
      Tecnologia.splice(result, 1);
    }
  Tool.setDataToLocalStorage('tecnologia', Tecnologia);
  window.location.reload();
}