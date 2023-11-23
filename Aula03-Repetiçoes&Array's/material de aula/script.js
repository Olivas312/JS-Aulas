// Repetiçoes

//While (verifica e depois faz)
var cont = 0;

while(cont<=10){
    console.log(`${cont}`)
    cont++
}
console.clear()

// Do While (Faz e depois verifica)

var contador= 0
do{
    console.log(`Fiz ${contador} Vezes`)
    contador++
}while(contador <= 10);

// For 
for(let i =0; i<=10; i++){
    console.log('repetição N°', i)
}

// for each

console.log('elementos');
var elementos = ['elemento1', 'elemento2','elemento3'];

//function pseudoFunction , anonimar
elementos.forEach((cadaElemento) => {
    
    console.log("-" , cadaElemento) 
});