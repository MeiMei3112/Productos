class Admin {
    id;
    Nombre;
    Apellidos;
    password;
    admin = [];
    constructor(name,lastname){
        this.Nombre =name;
        this.id =  this.crearId();
        this.Apellidos=lastname;
        this.password=this.actualizarPassword();
    }

   
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
