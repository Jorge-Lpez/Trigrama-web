const btnmovil = document.querySelector(".btn-movil");
const navmenu = document.querySelector(".ul-nav");

//Agregando evento al logo de la page
const logo = document.querySelector(".logo");

myApp();


function myApp(){

    btnmovil.addEventListener("click", agregarClasses);

    logo.addEventListener("click", () => {
        window.location.href="/";
    });
}


function agregarClasses(){

    if( navmenu.classList.contains("active") ){
        navmenu.classList.remove("active");
    }else{
        navmenu.classList.add("active");
    }
}