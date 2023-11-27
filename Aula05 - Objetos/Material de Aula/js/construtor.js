class Aluno{
    constructor(valNome,valIdade,valTurma){
        this.nome = valNome;
        this.idade = valIdade;
        this.turma = valTurma;
    }
}
class Curso{
    constructor(valNome,valDuracao,valTipo){
        this.nome = valNome;
        this.duracao = valDuracao;
        this.tipo = valTipo;
    }
}

var curso1 = new Curso('Front',220,'Tecnologia')
var curso2 = new Curso('Java',400,'Tecnologia')

var alunoNovo1 = new Aluno('Leandro',25,curso1)
var alunoNovo2 = new Aluno('Alice',20,curso2)
