//Ir a inventario
const mainBtn = document.querySelector('#main-btn');
mainBtn.addEventListener('click', switchPage);
function switchPage () {
    window.location.href = './pages/products.html'
}
//Dark Mode
const colorModeBtn = document.querySelector('#dark-mode-btn');
const body = document.body;
const menuBtn = document.querySelectorAll('.menu-btn');
let darkMode = localStorage.getItem ("dark-mode")
function darkModeOn () {
    body.classList.add ('dark-mode');
    menuBtn.forEach(boton => {
        boton.classList.add('dark-mode-btn');
    })
    mainBtn.classList.add('dark-mode-btn');
    localStorage.setItem ("dark-mode", "on");
}
function darkModeOff () {
    body.classList.remove ('dark-mode');
    menuBtn.forEach(boton => {
        boton.classList.remove('dark-mode-btn');
    })
    mainBtn.classList.remove('dark-mode-btn');
    localStorage.setItem ("dark-mode", "off");
}
if (darkMode === "on"){
    darkModeOn();
}else {
    darkModeOff();
}
colorModeBtn.addEventListener ('click', () => {
    darkMode = localStorage.getItem ("dark-mode");
    if (darkMode === "on"){
        darkModeOff();
    }else {
        darkModeOn();
    }
})