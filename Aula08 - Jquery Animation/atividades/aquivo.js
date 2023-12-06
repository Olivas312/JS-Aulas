var mode = $('#troca');
var caixa = $('#caixa');
var caixote = $('#caixote');

mode.on('click', function(){
    caixa.css('backgroundImage','url(image/ceuNoite.png)');
    mode.css('backgroundImage','url(image/lua.png)')
        mode.animate({
            marginLeft:'48px',
        })
});
mode.on('dblclick', function(){
    caixa.css('backgroundImage','url(image/ceuDia.png)');
    mode.css('backgroundImage','url(image/sol.png)')
    mode.animate({
        marginLeft:'0px',   
    },{duration:250})
})
