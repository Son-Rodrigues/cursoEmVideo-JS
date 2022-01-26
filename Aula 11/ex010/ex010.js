function calcular() {
    var velocidade = window.document.querySelector('input#velocidade'); // valor recebido no input atribuido a variável
    var resultado = window.document.querySelector('div#resultado'); // área onde será mostrado o resultado atribuida a uma variável
    var velocidadeNum = Number(velocidade.value); // valor recebido no input foi transformado em Number e passado a outra variável

    resultado.innerHTML = `<p> Sua velocidade atual é de <strong> ${velocidadeNum} Km/h</strong>.</p>`; // resultado passado para a div

    if (velocidadeNum > 60) {
        resultado.innerHTML += `<p> Você está MULTADO por excesso de velocidade. </p>`; // se velocidade estiver > 60 isso será adicionado ao resultado
    }
    resultado.innerHTML += `<p> Ao dirigir use sempre cinto de segurança. </p>`; // caso não esteja isso sera adicionado
}