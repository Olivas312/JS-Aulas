class Filme{
    constructor(valNome,valCategoria,valDescricao,valData,valDiretor){
        this.nome = valNome
        this.categoria = valCategoria
        this.descricao = valDescricao
        this.data = valData
        this.diretor = valDiretor
    }
}
var btnCriar = document.querySelector('#criarCatalogo');
var btnMostrar = document.querySelector('#mostrarCatalogo');
var filmeNovo = [];

btnCriar.addEventListener('click',criarCatalogo);
btnMostrar.addEventListener('click', mostrarCatalogo);

function criarCatalogo(){
    // Entrada de Dados
    let nome = document.querySelector('#flm-nome').value;
    let categoria = document.querySelector('#flm-categoria').value;
    let descricao = document.querySelector('#flm-descricao').value;
    let data = document.querySelector('#flm-data').value;
    let diretor = document.querySelector('#flm-diretor').value;
    // inserir o objeto na array
    filmeNovo.push( new Filme(nome,categoria,descricao,data,diretor))
    // Saida de Dados
};

function mostrarCatalogo(){
    // tratamento
    let resposta = document.querySelector('#resposta');
    
    resposta.innerHTML="";

    filmeNovo.forEach((elemento)=>{
        
        resposta.innerHTML += `
        <div class="post">
        <h4>${elemento.nome}</h4>
        <h4>${elemento.categoria}</h4>
        <h4>${elemento.descricao}</h4>
        <h4>${elemento.data}</h4>
        <h4>${elemento.diretor}</h4>
        `
    })
   
};
