function resultado() {
    var paísN = window.document.getElementById('nacionalidade'); // valor recebido do input
    var resultado = window.document.querySelector('div#resultado'); // resultado que sera mostrado no navegador
    var país = String(paisN.value); // valor recebido foi tranformado em string

    resultado.innerHTML = `<p> Registro de Naciscinalidad: </p>`;

    if (pais === 'Argentina' || pais === 'argentina') {
        resultado.innerHTML += `<p> Ciudadano argentino. Dirígete a la salida del aeropuerto y bienvenido. </p>`; // caso a condição seja verdadeira esse será o resultado
    } else {
        resultado.innerHTML += `<p> Extranjero. Bienvenido, ir a la salida del aeropuerto y disfrutate del viaje en nuestro pais. </p>`; // caso não esse será o resltado 
    }

    resultado.innerHTML += `<p> NOTA: Este cupón debe presentarse a la salida del aeropuerto. </p>` // será concatenado ao resultado
}