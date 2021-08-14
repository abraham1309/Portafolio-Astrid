$(document).on('click', 'ul li', function(){ //Buscamos en el documento si se hace un "click" en los "li"
    $(this).addClass('activo').siblings().removeClass('activo'); //Al hacer click le agregamos la clases "activo" al "li" que se preciono, y a sus hermanos "siblings()" le quitamos la clase
})

//Metodo para cerrar el munu del navbar para celulares
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});