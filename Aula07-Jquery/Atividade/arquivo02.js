var tema = $('#trocaTema');
var body = $('body');

tema.on('click', function(){
    if(tema.hasClass('temaClaro')){
        //tema.classList.replace('temaClaro','temaEscuro)
        tema.removeClass('temaClaro');
        tema.addClass('temaEscuro');
        
        tema.text('Tema Claro');

        body.removeClass('temaClaro');
        body.addClass('temaEscuro');
    }else{
        tema.removeClass('temaEscuro');
        tema.addClass('temaClaro');
        
        tema.text('Tema Escuro');

        body.removeClass('temaEscuro');
        body.addClass('temaClaro');
    }

});