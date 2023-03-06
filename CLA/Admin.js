class Admin {
    id;
    Nombre;
    Apellidos;
    correo;
    password;
    admin = [];
    constructor(name,lastname){
        this.Nombre =name;
        this.id =  this.crearId();
        this.Apellidos=lastname;
        this.#correo=this.actualizarCorreo();
        this.#password=this.actualizarPassword();
    }

   /**
    * 
    * @param {string} correo 
    */ 
   actualizarCorreo = function(correo){
    this.correo = correo;
}
/**
    * 
    * @param {string} password
    */ 
   actualizarPassword = function(password){
    this.password = password;
}
   /**
     * 
     * @returns {Int}
     */
   crearId= function(){
    let name =  this.Nombre;
    return  name.charAt(0) + Math.floor(Math.random() * 1000);
}
guardarAdmin = function(nuevoAdmin){
    let admins =  this.admin;
    admins.push(nuevoAdmin);
}
}
