alert('Comanda de fechamento da Mesa')
var numeroClientes = prompt("Quantos clientes estão na mesa?")
var valorDaConta = prompt('Valor Total da conta')
var totalAPagarCliente = Number(valorDaConta / numeroClientes)

alert(`O Total a pagar para cada Cliente nesta mesa e de : R$${totalAPagarCliente}`)