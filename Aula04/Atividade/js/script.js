var campo = document.querySelector('#inputText');

campo.addEventListener("focus", mudaCor);
campo.addEventListener('blur', mudaCorVerifica);

function mudaCor(){
    campo.style.backgroundColor = "yellow";
}
function mudaCorVerifica(){
    let inputValor = campo.value
    if( inputValor.length < 3){
        inputValor.style.backgroundColor = 'red'
    }
    else{
        inputValor.style.backgroundColor = 'green'
    }
}