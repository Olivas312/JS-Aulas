var multiplicador= [
    1,2,3,4,5,6,7,8,9,10
]
var numero = 0

while(numero<=10){
    for(var i = 0 ; i<=10 ; i++){
    console.log('Tabuada do ', i)
    for(let indice in multiplicador){
        var resultado = numero * multiplicador[indice]
        console.log(`${numero} x ${multiplicador[indice]} = ${resultado}`)
    }
        numero++
}
}
