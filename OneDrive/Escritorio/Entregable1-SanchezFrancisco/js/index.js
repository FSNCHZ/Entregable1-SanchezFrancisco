let productos = JSON.parse(localStorage.getItem('productos')) || []

const agregarProducto = (nombre, cantidad, categoria) => {
    const producto = {
        id:crypto.randomUUID,
        nombre,
        cantidad,
        categoria
    }
    productos.push(producto);
    localStorage.setItem('productos',JSON.stringify(productos));
    return producto;
}

const borrarProducto = (nombre) => {
    productos = productos.filter(producto => producto.nombre != nombre);
    localStorage.setItem('productos',JSON.stringify(productos))
}

const nuevaCardProducto = (producto) => {
    const main = document.querySelector('#main');
    const element = document.createElement('div');
    element.className = "card-producto"
    element.innerHTML = `
                    <p>Nombre del producto: ${producto.nombre}</p>
                    <p>Cantidad del producto: ${producto.cantidad}</p>
                    <p>Categoria del producto: ${producto.categoria}</p>                    
    `
    main.append(element)
}

const principal = () => {
    productos.forEach(producto => {
        nuevaCardProducto(producto)
    });
    const btnAgregar = document.querySelector('#btnAgregar');
    btnAgregar.addEventListener('click',()=>{
        const nombreNuevoProducto = document.querySelector('#nombreNuevoProducto');
        const cantidadNuevoProducto = document.querySelector('#cantidadNuevoProducto');
        const categoriaNuevoProducto = document.querySelector('#categoriaNuevoProducto');
        agregarProducto(nombreNuevoProducto.value, cantidadNuevoProducto.value, categoriaNuevoProducto.value);
    }
    )
}

principal()