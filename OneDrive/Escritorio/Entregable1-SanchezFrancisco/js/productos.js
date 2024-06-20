//Dark Mode
const body = document.body;
const menuBtn = document.querySelectorAll('.menu-btn');  
const mainBtn = document.querySelector('.main-btn');
const colorModeBtn = document.querySelector('#dark-mode-btn');
let darkMode = localStorage.getItem('dark-mode');
function darkModeOn() {
    colorModeBtn.classList.add ('dark-mode-btn')
    body.classList.add('dark-mode');
    menuBtn.forEach(boton => {
        boton.classList.add('dark-mode-btn');
    })
    mainBtn.classList.add('dark-mode-btn');
    localStorage.setItem("dark-mode", "on")
};
function darkModeOff() {
    colorModeBtn.classList.remove ('dark-mode-btn')
    body.classList.remove('dark-mode');
    menuBtn.forEach(boton => {
        boton.classList.remove('dark-mode-btn');
    })
    mainBtn.classList.remove('dark-mode-btn');
    localStorage.setItem("dark-mode", "off")
};
if (darkMode === "on"){
    darkModeOn();
}else {
    darkModeOff();
};
colorModeBtn.addEventListener('click', () => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "on"){
        darkModeOff();
    }else{
        darkModeOn();
    }
})
//Main

let productos = JSON.parse(localStorage.getItem("productos")) || []

const nuevoProducto = (nombre, cantidad, id) => {
    const producto = {
        nombre,
        cantidad,
        id
    };
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
    return producto;
};
const borrarProducto = (id) => {
    productos = productos.filter(producto => producto.id != id)
    localStorage.setItem("productos",JSON.stringify(productos))
 }
 const borrarTarjeta = (id) => {
    const element = document.getElementById(id)
    element.remove()
}
const nuevaCard = (producto) => {
    const inv = document.querySelector('#inv');
    const container = document.createElement('div');
    container.className = 'card-producto';
    container.id = producto.id
    container.innerHTML = `
                            <div class="info-producto">
                                <p>Nombre: ${producto.nombre.toUpperCase()}</p>
                                <p>Cantidad: ${producto.cantidad}</p>
                            </div>
                            <button class="menu-btn btn-borrar"><i class="bi bi-trash3"></i></button> 
    `
    inv.append(container);
}
const principal = () => {
    productos.forEach(producto => {
        nuevaCard(producto);
    })
    const btnAgregar = document.querySelector('#btn-add');
    btnAgregar.addEventListener('click', () => {
        const nombreProducto = document.querySelector('#producto-nombre');
        const cantidadProducto = document.querySelector('#producto-cantidad');
        const idProducto = document.querySelector('#producto-id')
        nuevoProducto(nombreProducto.value, cantidadProducto.value, idProducto.value)
    })
}
principal();