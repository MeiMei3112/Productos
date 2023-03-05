class Tools {
   
    /**
     * 
     * @param {String} parameter 
     * @param {Array} data 
     */
    static setDataToLocalStorage(parameter, data){
        localStorage.setItem(parameter, JSON.stringify(data));
    }
    /**
     * 
     * @param {string} parameter 
     * @returns {Array}
     */
    static getDatFromLocalStorage(parameter){
        return JSON.parse( localStorage.getItem(parameter));
    }


    /**
     * 
     * @param {string} parameter 
     * @returns {Array}
     */
    static getMecanicFromLocalStorage(parameter= "productos"){
        let productos = []; 
        let productosArray = JSON.parse( localStorage.getItem(parameter));
        if(productosArray.length != 0){
            productosArray.forEach(element => {
                let object =  new Mecanic(element.precio, element.nombreproducto, element.codigoBarra, element.marca, element.area);
                productos.push(object);
            });
        }
        return productos;
    }

    
    
    
    
    
    
}
