function solicitarNombre () {
    let nombreTienda = prompt ("Ingrese el nombre de su tienda: ");
    document.title = ("Stockeate - "+ nombreTienda);
}
solicitarNombre();

const inventario = [];

function acciones () {
    let accionSolicitada = prompt ("Escriba 'agregar' para agregar un producto, o escriba 'inventario' para ver la lista de productos actual.")
    if (accionSolicitada == 'agregar'){
        inventario.push(prompt())
        acciones()
    }
    else if (accionSolicitada == 'inventario'){
        if ((inventario.length) == 0){
            alert('No hay productos en el inventario')
        }
        else{
            alert(inventario.join(', '))
        }
        acciones()
    }
    else {
        alert('El valor ingresado no es valido')
        acciones ()
    }
}
acciones ()


