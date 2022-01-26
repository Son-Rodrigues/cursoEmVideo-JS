function tabuada() {
    let numero = document.getElementById('valor');
    let valor = document.getElementById('tabuada');

    if (numero.value.length == 0) { // valor tem que ser maior que 0
        window.alert('Insira dados válidos!');
    } else {
        let num = Number(numero.value); // transforma o número escolhido em número
        valor.innerHTML = '';

        for (let n = 1; n <= 10; n++) { // enquanto variável n for 1 e menor ou igual à 10 ele vai somar mais 1
            let item = document.createElement('option'); // cria o elemento option no select
            item.text = `${num} X ${n} = ${num*n}`; // cria o texto a ser exibido
            valor.appendChild(item); // exibe o texto
        }
    }
}