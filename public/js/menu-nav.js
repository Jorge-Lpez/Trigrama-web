const btnmovil = document.querySelector(".btn-movil");
const navmenu = document.querySelector(".nav-menu");

myApp();


function myApp(){
    btnmovil.addEventListener("click", agregarClasses);
}


function agregarClasses(){

    if( navmenu.classList.contains("active") ){
        navmenu.classList.remove("active");
    }else{
        navmenu.classList.add("active");
    }
}