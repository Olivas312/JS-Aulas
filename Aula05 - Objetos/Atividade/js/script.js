class Carro{
    constructor(valMarca,valModelo,valAno,valCor,valVelocidadeMaxima,valVelocidadeAtual){
        this.marca= valMarca;
        this.modelo= valModelo;
        this.ano= valAno;
        this.cor= valCor;
        this.velocidadeMaxima= valVelocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    acelerar(valAcelerado){
            var acelerando = this.velocidadeAtual + valAcelerado;

            if(acelerando > 0 && acelerando <= this.velocidadeMaxima){
                this.velocidadeAtual += valAcelerado
                return 'Voce esta indo á '+acelerando+' Km/h'
            }else if(acelerando >= this.velocidadeMaxima){
                return 'Você vai fundir o motor! Reduza a velocidade para as adequações da via!'
            }else{
                return ' Voce esta parado'
            }
    }

}
    
var btnCarro = document.querySelector('#btnCarro')

btnCarro.addEventListener('click',criarCarro)

function criarCarro(){
    // entrada de Dados
    let marca = document.querySelector('#marca').value;
    let modelo = document.querySelector('#modelo').value;
    let ano = document.querySelector('#ano').value;
    let cor = document.querySelector('#color').value;
    let velocidadeMaxima = document.querySelector('#velocidadeMax').value;
    let resposta = document.querySelector('#resposta')
    // Tratamento
    var carroNovo = new Carro(marca,modelo,ano,cor,velocidadeMaxima)
    console.log(carroNovo)

    resposta.innerHTML = `<div class="post">
    <h3>${carroNovo.marca}</h3>
    <h3>${carroNovo.modelo}</h3>
    <h3>${carroNovo.ano}</h3>
    <h3 style="color:${carroNovo.cor};">Cor Do Carro</h3>
    <h3>${carroNovo.velocidadeMaxima}</h3>
    </div>`

}