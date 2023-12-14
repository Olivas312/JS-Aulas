var mode = $('#troca');
var caixa = $('#caixa');
var caixote = $('#caixote');

mode.on('click', function(){
    caixa.css('backgroundImage','url(image/ceuNoite.png)');
    mode.css('backgroundImage','url(image/lua.png)');
    body.hasClass('claro');
    body.removeClass('claro');
    body.addClass('escuro');
        mode.animate({
            marginLeft:'48px',
        })
});
mode.on('dblclick', function(){
    caixa.css('backgroundImage','url(image/ceuDia.png)');
    mode.css('backgroundImage','url(image/sol.png)');
    body.hasClass('escuro');
    body.removeClass('escuro');
    body.addClass('claro');
    mode.animate({
        marginLeft:'0px',   
    },{duration:250})
})
