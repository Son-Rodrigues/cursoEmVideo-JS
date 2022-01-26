function fatorial(numero) {
    let fat = 1;

    for (var n = numero; n > 1; n--) { // enquanto n igual a numero e maior que 1 será tirado 1
        fat *= n; // n * n-1 * n-1 e  n-1 até que a função se torne false
    }

    return fat;
}

console.log(fatorial(5));