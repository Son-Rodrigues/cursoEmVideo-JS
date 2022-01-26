var numero = document.getElementById('numero');
var lista = document.getElementById('add');
var resultado = document.querySelector('div#resultado');
let valores = []; 

function isNumero(num) {
    if(Number(num) >= 1 && Number(num) <= 100) { // se num maior ou igual a 1 e num menor ou igual a 100
     return true; // a função funciona
    } else { // caso o contrário
     return false; // não funciona
 }
}

function inLista(num, list) {
    if(list.indexOf(Number(num)) != -1) { // se o valor não existir na lista
        return true; // a função funciona
    } else { // caso não
        return false; // retorna como false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) { // se o valor escolhido for aceito e não repetido
        valores.push(Number(numero.value)); // será adicionado ao array
        var item = document.createElement('option'); // cria o elemento option no select
        item.text = `O valor adicionado foi ${numero.value}`; // adiciona o texto com o número adicionado no option
        lista.appendChild(item); // mostra no option
        resultado.innerHTML = ''; // resultado vazio
    } else {
        window.alert('Valor inválido ou já encontrado na lista.'); // coso não atenda as requisições
    }

    numero.value = ''; // Apgar o valor do input após ele ser adicionado 
    numero.focus(); //  deixa disponivel para adicionar ou numero sem precisar clicar novamente no input
}

function finalizar() {
    if (valores.length == 0) { // se o comprimento for igul a 0 será necessário adicionar números
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let total = valores.length; // para calcular número de itens no array
        let maior = valores[0]; // para calcular o maior número
        let menor = valores[0]; // para calcular o menor número
        let soma = 0; // para fazer a soma dos números
        let media = 0; // para fazer a média dos números

        for (let pos in valores) { // se pos está no array valores

            soma += valores[pos]; // calcula a soma dos números
            media = soma / valores.length; // calcula a média

            if (valores[pos] > maior) // se valores[pos] maior que maior
                maior = valores[pos]; // maior é o maior valor de array
            if (valores[pos] < menor) // se valores[pos] menor que array
                menor = valores[pos]; // menor é o menor número do array
        }

        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`;
        resultado.innerHTML += `<p>O maior foi o número ${maior}.</p>`
        resultado.innerHTML += `<p>O menor foi o número ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores temos o número ${soma}.</p>`
        resultado.innerHTML += `<p>A média da soma dos valores é igual á ${media}.</p>`
    }
}

function apagar() {
    while(valores.length) { // enquanto existirem valores no array
        valores.pop(); // apgar valores do array
     }

     resultado.innerHTML = '';
     lista.length = 0; // apagar valores da lista
}