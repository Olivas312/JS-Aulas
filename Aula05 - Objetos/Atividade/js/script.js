class Carro{
    constructor(valMarca,valModelo,valAno,valCor,valVelocidadeMaxima,valVelocidadeAtual){
        this.marca= valMarca;
        this.modelo= valModelo;
        this.ano= valAno;
        this.cor= valCor;
        this.velocidadeMaxima= valVelocidadeMaxima;
        this.velocidadeAtual = valVelocidadeAtual;
    }
    acelerar(){
            acelerar = this.velocidadeAtual + 1
            if(acelerar > 0){
                return "Voce esta indo á",acelerar,'Km/h'
            }else if(acelerar>this.velocidadeMaxima){
                return 'Você vai fundir o motor'
            }else{
                return ' Voce esta parado'
            }
         }
    
}
var carroNovo = new Carro('Toyota','Corola',1990,'Azul',200,0)