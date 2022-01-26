function carregar() {
    var fundo = window.document.getElementById('fundo'); // pega o body e coloca em uma variável através di id
    var msg = window.document.getElementById('mensagem'); // pega a div e coloca em uma variável através do id
    var foto = window.document.getElementById('imagem'); // pega a imagem e coloca em uma variável atráves do id
    var data = new Date(); // data atual
    var hora = data.getHours(); // hora atual
    var minutos = data.getMinutes(); // minutos atual
    var segundos = data.getSeconds(); // segundos atual

    if (hora < 10) {
        hora = '0' + hora; // adiciona um '0' se a hora for menor que 10
    }
    if (minutos < 10) {
        minutos = '0' + minutos; // faz o mesmo com os minutos
    }
    if (segundos < 10) {
        segundos = '0' + segundos; // e segundos
    }

    var horaCompleta = [hora, minutos, segundos].join(':'); // mostra a hora completa

    msg.innerHTML = `<p> Agora são ${horaCompleta} horas </p>`;

    if (hora >= 5 && hora < 12) {
        foto.src = 'img/manhaEdited.png';
        fundo.style.backgroundColor = 'yellow'; // muda fundo e imagem de acordo com a hora do sistema
        msg.innerHTML += `<p> Bom dia! </p>`;
    } else if (hora > 12 && hora < 18) {
        foto.src = 'img/tardeEdited.png';
        msg.innerHTML += `<p> Boa tarde! </p>`;
    } else {
        foto.src = 'img/noiteEdited.png';
        fundo.style.backgroundColor = 'black';
        msg.innerHTML += `<p> Boa noite! </p>`;
}
}

function horaCerta() {
    setInterval(carregar, 1000);
} // a hora vai mudando em tempo 'real' 