var number1 = Number(prompt('Digite Seu primeiro Numero'))
var operador = prompt("Digite o operador")
var number2 = Number(prompt('Digite seu segundo numero'))

switch(operador){
    case "+" :
        var resultado = number1 + number2;
        break
    case "soma" :        
        var resultado = number1 + number2;
        break   
    case "-" :
        var resultado = number1 - number2;
        break
    case "subtração" :        
        var resultado = number1 - number2;
        break   
    case "/" :
        var resultado = number1 / number2;
        break
    case "divisao" :        
        var resultado = number1 / number2;
        break   
    case "*" :
        var resultado = number1 * number2;
        break
    case "x" :
        var resultado = number1 * number2;
        break
    case "multiplicação" :        
        var resultado = number1 * number2;
        break   
    
    default:
        alert("Operador invalido");
        location.reload();
        break;    
}
alert(`O resultado é = ${resultado} !`);
var novoCalculo = confirm('Deseja fazer um novo calculo?')

if(novoCalculo==true){
    location.reload
}
