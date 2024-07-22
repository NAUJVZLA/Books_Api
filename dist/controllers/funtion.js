"use strict";
//declarando variales para el modo oscuro
const TogglechangeMode = document.getElementById('TogglechangeMode');
const ModeWhite = document.getElementById('ModeWhite');
const ModeDark = document.getElementById('Mdark');
const NavBar = document.querySelector('.offcanvas');
const NavBar1 = document.querySelector('.container-fluid');
// const nav = document.querySelector('nav') as HTMLElement;
const body = document.querySelector('body');
//tratando de poner modo noche en navbar
TogglechangeMode.addEventListener('click', (e) => {
    NavBar.classList.toggle('dark-modo'),
        NavBar1.classList.toggle('dark-modo');
});
// llamando al svg para que quede oculto 
ModeWhite.style.display = 'none';
//listeners event to change color of the body
TogglechangeMode.addEventListener('click', (e) => {
    body.classList.toggle('dark-modo');
    if (body.classList.contains('dark-modo')) {
        localStorage.setItem('mode', 'dark-modo');
        ModeWhite.style.display = 'inline-block';
        ModeDark.style.display = 'none';
        //aqui cambio el icono para que mueste el claro
    }
    else {
        localStorage.setItem('mode', 'light-modo'); // Puedes ajustar esto si prefieres otro nombre para el modo claro
        ModeWhite.style.display = 'none';
        ModeDark.style.display = 'inline-block';
    }
});
