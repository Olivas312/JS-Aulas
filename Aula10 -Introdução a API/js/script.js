// API = Application Programming Interface
// Fech = Busca a aplicação
// Json = Maneira de transmitir dados do lado do servidor para o lado Cliente
// Then = Acessamos outro escopo da aplicação(pegou a api, entao)
// para acessar a API use o then, e para chegar acessar os dados use o then para descer os niveis

var btnCep= document.querySelector('#btnCep');
function consultar(){
    var cepUsuario = document.querySelector("#cep").value;
    var localidade = document.querySelector("#localidade");
    var uf = document.querySelector("#uf");
    var bairro = document.querySelector("#bairro");
    var logadouro = document.querySelector("#logadouro");
    var complemento = document.querySelector("#complemento");

    fetch(`https://viacep.com.br/ws/${cepUsuario}/json/`).then(response => {
        return response.json()
    }).then(dados => {
        
        cepUsuario.innerHTML = `${dados.cep} `
        localidade.innerHTML = `${dados.localidade} `
        uf.innerHTML = `${dados.uf} `
        bairro.innerHTML = `${dados.bairro} `
        logadouro.innerHTML = `${dados.logadouro} `
        complemento.innerHTML = `${dados.complemento} `
    });
}
btnCep.addEventListener('click', consultar);
