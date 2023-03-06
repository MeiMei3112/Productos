class Producto{
    precio;
    nombreproducto;
    codigoBarra;
    marca;
    area;
    constructor(prc,np,cb,mrc,ar){
        this.precio = prc;
        this.nombrepPoducto = np;
        this.codigoBarra = cb;
        this.marca = mrc;
        this.area = ar;
    }
}
function updateTable(){
    let items  = "";
    producto.forEach(element => {
    
        items += 
        `<tr>
            <th scope="row">${element.getId()}</th>
            <td>${element.getFullNombre()}</td>
            <td>${element.precio}</td>
            <td>${element.codigodebarras}</td>
            <td>${element.marca}</td>
            <td>${element.area}</td>
            <td><a href="" class="">Ver</a><button class="btn btn-danger" href="#" onclick="deleteMecanic('${element.getId()}')">Eliminar</td>
        </tr>`;
    });
    let body = document.getElementById('table_body_producto');
    body.innerHTML = items;    
}
