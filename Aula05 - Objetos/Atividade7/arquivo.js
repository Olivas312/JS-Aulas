class Filme{
    constructor(valNome,valCategoria,valDescricao,valData,valDiretor){
        this.nome = valNome
        this.categoria = valCategoria
        this.descricao = valDescricao
        this.data = valData
        this.diretor = valDiretor
    }
}
var btnCriar = document.querySelector('#criarCatalogo')

btnCriar.addEventListener('click',criarCatalogo)

function criarCatalogo(){
    // Entrada de Dados
    
    // terror
    let nome = document.querySelector('#flm-nome').value;
    let categoria = document.querySelector('#flm-categoria').value;
    let descricao = document.querySelector('#flm-descricao').value;
    let data = document.querySelector('#flm-data').value;
    let diretor = document.querySelector('#flm-diretor').value;
    let resposta = document.querySelector('#resposta');

    // tratamento
    var filmeNovo = new Filme(nome,categoria,descricao,data,diretor)

    // Saida de Dados
    resposta.innerHTML = `<div class="post">
    <h4>${filmeNovo.nome}</h4>
    <h4>${filmeNovo.categoria}</h4>
    <h4>${filmeNovo.descricao}</h4>
    <h4>${filmeNovo.data}</h4>
    <h4>${filmeNovo.diretor}</h4>
    `

}