
$('#calcular').on('click', function(){
  let numero =Number( $('#numUsuario').val());
  var multiplicador = 0;
    while(multiplicador<10){
      multiplicador++;
      var resultado = numero * multiplicador;

      document.querySelector('#resultado').innerHTML += (`${numero} x ${multiplicador} = ${resultado}<br>`)
    }
 });