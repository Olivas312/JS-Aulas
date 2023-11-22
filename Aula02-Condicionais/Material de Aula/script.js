//Estruturas Condicionais 

var idade = Number(prompt('Qual e a sua idade ?'));
if (idade>= 18){
    alert(`Seja bem-Vindo ao site XXX`);
}else if(idade === 0){
    alert("Idade invalida , Insira uma idade correta");
    location.reload;
}else{
    alert('Você é menor de idade, Sua entrada não foi permitida !');
    //location redireciona (.reload : faz com que a pagina recarregue)
    location.href = 'https://www.google.com.br/';
}

//(condição ? bloco1: bloco2 ) => if ternario
// EXP: x>10 ? alret("legal") : ("Nada legal")