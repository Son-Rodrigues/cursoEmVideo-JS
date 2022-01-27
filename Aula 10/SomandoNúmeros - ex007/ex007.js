function somar() {
    var numeroUm = window.document.getElementById('txtn1'); // cria uma variável ligada ao input e guarda o valor
    var numeroDois = window.document.getElementById('txtn2'); // cria uma variável ligada ao input e guarda o valor
    var res = window.document.getElementById('resul'); // cria uma variável pra ser manipulada e mostrar o resulltado na tela
    var n1 = Number(numeroUm.value); // transforma a variavel do input em um número
    var n2 = Number(numeroDois.value); // transforma a variável do segundo input em número
    var resultado = n1 + n2; // soma as váriaveis
    res.innerHTML = `A soma entre ${n1} e ${n2} é <strong> ${resultado} </strong>.`; // mostra o resultado na tela do navegador
}