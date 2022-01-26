function contar() {
    let inicio = window.document.getElementById('numeroInicial');
    let final = window.document.getElementById('numeroFinal');
    let passo = window.document.getElementById('pulo');
    let resultado = window.document.getElementById('resultado');

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = `Impossível contar!`; // verificação de dados
        window.alert('Insira dados válidos!'); // se vlor do comprimento do incio, final ou do passo for 0 vai abrir uma caixa de alert
    } else { // caso contrário
        resultado.innerHTML = 'Contando:';

        let i = Number(inicio.value); // vai transformar os dados em Number
        let f = Number(final.value);
        let p = Number(passo.value);

        if (p <= 0) { // se passo menor ou igual a 0
            window.alert('Não é possível passo = 0. Passo valerá 1!');
            p = 1;
        }

        if (i < f) { // se o numero inicial for menor que o final
            for (let r = i; r <= f; r += p) { // variavel r vai receber número inicial e vai contar ate o final pulando o número desejado
                resultado.innerHTML += `${r} 👉 `;
            }
        } else {
            for (let r = i; r >= f; r -= p) { // variavel r vai receber número inicial e var regredir até o final pulando o número desejado
                resultado.innerHTML += `${r} 👉 `;
            }
        }
        resultado.innerHTML += `🏴`;
    }
}