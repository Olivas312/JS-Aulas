//  Seletor Jquery = $(# ou . elemento)
var titulo = $('#tituloDaPagina').text('JQUERY aula')

var subtitulo = $('#subtituloDaPagina').on('mouseover', function(){
    console.log('Esse é o texto da pagina')
})

//  Comportamento
// Jquery te a capacidade de avaliar valores não definidos e vazios


// algoritimo de contagem de caracteres 

var texto = $('#blocoDeTexto').on('input', function(){
    let bloco = $('#blocoDeTexto').value;
    let caracteres = $('#numCaracteres')

    var contagem = bloco.length;

    caracteres.text(contagem);
})