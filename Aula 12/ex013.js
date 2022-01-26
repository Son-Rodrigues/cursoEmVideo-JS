var agora = new Date(); // data atual do sistema
var semana = agora.getDay(); // dia atual no sistema

switch(semana) {
    case 0:
        console.log(`Domingo`);  // caso seja seja o priemiro dia da semana retorna o nome dele
        break;
    
    case 1:
        console.log(`Segunda`); // caso seja o segudo
        break;

    case 2:
        console.log(`Terça`); // caso seja o terceiro e assim por diante
        break;

    case 3:
        console.log(`Quarta`);
        break;

    case 4:
        console.log(`Quinta`);
        break;

    case 5:
        console.log(`Sexta`);
        break;

    case 6:
        console.log(`Sábado`);
        break;
}

const data = new Date(); // momento atual 
const horas = data.getHours(); // hora atual
const minutos = data.getMinutes(); // minutos atual
const segundos = data.getSeconds(); // segundos atual

const hhmmmss = [horas, minutos, segundos].join(':'); // mostra todos dados acima juntos separados por ':';
console.log(hhmmmss);