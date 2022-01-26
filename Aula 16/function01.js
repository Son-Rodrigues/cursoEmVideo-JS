function parimpar(numero) {
    if (numero % 2 == 0) { // se o número dividido por 2 tiver resto 0 retorna 'Par'
        return `Par!`;
    } else { // caso contrário retorna 'Ímpar'
        return `Ímpar!`;
    }
}

let num = parimpar(20);
console.log(num); // console.log(parimpar(20));