// RECURSIVIDADE

function fatorial(numero) {
    if (numero == 1) { // se numero é igual a 1 retorna 1
        return 1;
    } else { // caso contrário retorna numero * a função com o número estipulado menos 1 até que seja 1
        return numero * fatorial(numero - 1);
    }
}

console.log(fatorial(5));