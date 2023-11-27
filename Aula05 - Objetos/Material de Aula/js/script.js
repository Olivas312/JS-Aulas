// Class no java Script serve para traze um objeto e declarar seus atributos
class Cliente {
    nome;
    dataDeNacimento;
    cpf;
    conta;
    agencia;
    saldo;
    sacar(valor){
        if(this.saldo >= valor){
            //  This . => Para chamar o atributo da Class(Objeto) dentro da função 
            this.saldo = this.saldo - valor;
            return "Valor sacado de : R$ ", valor;

        }else{
            return "Operação Não Realizada Por Falta De Saldo";
        }
    };
    depositar(valor){
        if(valor > 0 ){
            //  This . => Para chamar o atributo da Class(Objeto) dentro da função 
            this.saldo = this.saldo + valor;
            return "Novo saldo na conta : R$ ", valor;
        }else{
            return "Operação Não Realizada Por Falta de valor Real";
        }
    }; 
}
var cliente1 = new Cliente();
cliente1.nome = 'Leonardo';
cliente1.dataDeNacimento = '12/02/1960'
cliente1.cpf = '064.369.157-01'
cliente1.conta = '000194-9'
cliente1.agencia = '0001'
cliente1.saldo = 10000