var n1 = Number(window.prompt('Digite um número:')); // Podemos transformar uma string em numero com Number();
// Posso usar Number.parseFloat para números com ponto ou Number.parseInt para inteiros.
var n2 = Number(window.prompt('Digite outro número:'));
var s = n1 + n2;
window.alert(`A soma dos números ${n1} e ${n2} é ${s}.`);