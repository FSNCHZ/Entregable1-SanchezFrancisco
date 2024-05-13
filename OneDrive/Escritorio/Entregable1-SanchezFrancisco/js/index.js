function solicitarNombre () {
    let nombreTienda = prompt ("Ingrese el nombre de su tienda: ");
    document.title = ("Stockeate - "+ nombreTienda);
}
solicitarNombre();

const inventario = [];

//Repetir function accion

function repetirAccion (){
    let continuar = true;
    while (continuar){
        acciones()
        continuar = confirm('¿Desea continuar?')
    }
}

function accion () {
    let accionSolicitada = prompt ("Escriba 'agregrar' para agregar un producto, o escriba 'inventario' para ver la lista de productos actual");
    if (accionSolicitada == 'agregar'){
        const item = {
            nombre: nombreProducto,
            cantidad: cantidadProducto,
        }
        nombreProducto = prompt ('Escriba el nombre del producto')
        cantidadProducto = prompt ('Indique la cantidad del producto')
        inventario.push (item)
        alert ('¡El producto fue agregado!')
        repetirAccion()
    }
    else if (accionSolicitada == 'inventario'){
        if ((inventario.length == 0)){
            alert('No hay productos en el inventario')
            repetirAccion()
        }
        else{
            for (const producto of inventario){
                alert ('Nombre: ' + producto.nombre + " Cantidad: " + cantidadItem)
                repetirAccion()
            }
        }
    }
    else {
        alert('La acción no es valida')
        repetirAccion()
    }
}


