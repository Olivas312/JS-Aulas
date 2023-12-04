var numero = $('#numUsuario').on('input', function(){
    let btncalcular = $('#btnCalcular')
    if(numero !== 0){
    var multiplicador = 0;
    while(multiplicador<=10){
    multiplicador++
    var resultado = numero * multiplicador
    console.log(`${numero} x ${multiplicador} = ${resultado}`)
    }
   }else{
    alert('Insira um numero valido')
   }
  }
)