/*
$(document).on('click', 'ul li', function(){ //Buscamos en el documento si se hace un "click" en los "li"
    $(this).addClass('activo').siblings().removeClass('activo'); //Al hacer click le agregamos la clases "activo" al "li" que se preciono, y a sus hermanos "siblings()" le quitamos la clase
})
*/

//Metodo para cerrar el munu del navbar para celulares
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});

//Metodo para copiar al portapapeles
function copiar(){
    var input=document.querySelector('#InputCorreo');
    input.select();
    document.execCommand("copy");
}
document.querySelector("#btnCopiar").addEventListener("click", copiar);

/*Efecto activo al hacer scroll*/
let seccion=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('nav ul li a');

window.onscroll=()=>{
    seccion.forEach(sec=>{
        let top=window.scrollY;
        let cordenas=sec.offsetTop-150; /*Devuelve la posición superior (en píxeles) relativa a la parte superior del elemento*/
        let alto=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=cordenas && top<cordenas+alto){
            navLinks.forEach(links=>{
                links.classList.remove('activo');
                document.querySelector('nav ul li a[href*='+ id +']').classList.add('activo');
            });
        }
    });

};