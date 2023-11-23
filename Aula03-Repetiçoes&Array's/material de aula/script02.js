// Array's

// Como Criar

let arr = ['Rodrigo',29,1.71,true]
console.log(arr)

console.clear()

// Como acessar os elementos da array

console.log('Primeiro Eemento',arr[0])
console.log('Segundo Eemento',arr[1])
console.log('Terceiro Eemento',arr[2])
console.log('Quarto Eemento',arr[3])

// Como obter o tamanho do array
console.log('Tamanho da array',arr.length)

console.clear()

// Percorrendo a array

// Metodo 1
for(let i = 0; i < 4; i++){
    console.log(arr[i])
}
console.clear()

// Metodo 2
for(let elemento of arr){
    console.log(elemento)
}
console.clear()

// Metodo 3 
for(let indice in arr){
    console.log(indice, arr[indice])
}

console.clear()

// Array's - Parte 2 - Métodos de Array's
const array1=[20,30,40,50]
let array2=[]

// Fateamento : splice

//Neste splice ele ira pegar de indice 0 (primeira posição) ate o indice indicado como limite
// array.metodo(indice,remover,add)
console.log(array1.splice(0,2))

//Neste splice ele vai pegar da posição indicada ate o final da array
console.log(array1.splice(3))
console.clear()

// Adicionando elementos : push | unshift

// Metodo 1
console.log('Antes de adicionar',array2)

// Neste metodo ele adiciona como last item na array
array2.push(10,20,30)
array2.push(40)

console.log('Depois de adicionar', array2)
console.clear()

// Metodo 2
console.log('Antes de adicionar com unshift',array2)

// Neste metodo ele adiciona ao inicio da array
array2.unshift(0)

console.log('Depois de adicionar com unshift',array2)
console.clear()

// Removendo elementos : pop | shift

// Neste metodo remove o ultimo elemento da array
console.log('Antes de remover com pop', array2)

// assim pode retornar o valor removido
let elementoRemovido = array2.pop()

console.log('Depois de Remover com pop', array2)

console.log('Elemento Removido com pop', elementoRemovido)
console.clear()

// Neste metodo remove o primeiro elemento da array
console.log('Antes de remover com shift', array2)

// assim pode retornar o valor removido
let elementoRemovido2 = array2.shift()

console.log('Depois de Remover com shift', array2)

console.log('Elemento Removido com shift', elementoRemovido2)
console.clear()

// Concatenando array : concat

console.log(array1.concat(array2))

// Buscando elemento : indexOf | lastIndexOf


// Descubrindo a existencia de um elemento : includes

// Invertendo array : reverse