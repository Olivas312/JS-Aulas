// Replace - Replace All

var frase = " A vingança nunca e plena, mata a alma e envenena"

console.log(frase)
//  no metodo repleace ele busca 1 o termo utilisado dentro do parentese na primeira posição e subtitue pelo segundo termo
cosolelog(frase.replace('nunca','sempre'))
// no metodo repleace ele busca TODOS os termos utilisados dentro do parentese na primeira posição e subtitue pelo segundo termo
cosolelog(frase.replace('sempre','nunca'))


//  SetAtribute
// com o set atribute voce passa o atributo que voce quer alterar e qual o valor dele seguindo esse padrao
document.querySelector('span').setAttribute('style',"color: blue;");

// Class list
//  Com esse metodo ele remove uma classe declarada
document.querySelector("#classList").classList.remove('claro');
//  com esse metodo ele adiciona uma classe 
document.querySelector("#classList").classList.add('claro');

var elemento = document.querySelector("#classList")
// Com esse metodo ele subtitue a classe mas com referencia do elemento pai
if(elemento.classList.contains('claro')){
    elemento.classList.toggle('escuro')
}

// Set timeout

function msg(x){
    return new Promise ((teste)=>{
        setTimeout(() => {
            console.log('Bom Dia !')
        }, 2000);
       teste(x)
    })
}
async function carregando(){
    console.log('iniciou')
    await msg();
    console.log('Seja Bem Vindo')
}