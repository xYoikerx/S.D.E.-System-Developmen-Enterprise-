const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.navbar2');
ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
});

const boton4=document.querySelector('.logo')
boton4.addEventListener('click',() =>{
    window.location.assign("index.html")
})

const boton3=document.querySelector('.link-3')
boton3.addEventListener('click',()=>{
    window.location.assign("https://github.com/xYoikerx/S.D.E.-System-Developmen-Enterprise-.git")
})


const boton2=document.querySelector('.link-2')
boton2.addEventListener('click',()=>{
    window.location.assign("https://github.com/xYoikerx/S.D.E.-System-Developmen-Enterprise-.git")
})


const boton1=document.querySelector('.link-1')
boton1.addEventListener('click',()=>{
    window.location.assign("https://github.com/xYoikerx/S.D.E.-System-Developmen-Enterprise-.git")
})