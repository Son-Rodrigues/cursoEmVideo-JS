let num = [3, 5, 6, 9];
// num[4] = 1;
// num.push(8); // adiciona valor
// console.log(num.length); // conta quantos elementos tem no array
// num.sort(); // deixa o array em forma crescente

var pos = num.indexOf(5); // tenta achar o valor no array, se ele existir retornara a sua posição
if (pos == -1) { // se a variável for -1 ela não existe, coso não seja será mostrada sua posição
    console.loh(`O valor não existe!`);
} else {
    console.log(`O valor esta na posição ${pos}`);
}

console.log(num);