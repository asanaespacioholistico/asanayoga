const iconoMenu = document.querySelector('.menu');
const menuDesplegable = document.querySelector('.navegar');


iconoMenu.addEventListener('click', ()=>{
    menuDesplegable.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menuDesplegable.classList.contains('spread') 
        && e.target != menuDesplegable && e.target != iconoMenu){
        console.log('cerrar')
        menuDesplegable.classList.toggle("spread")
    }
})