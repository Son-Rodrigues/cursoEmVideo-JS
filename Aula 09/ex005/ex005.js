var paragrafo = window.document.getElementsByTagName('p')[0]; // selecionar o primeiro paragráfo [0] pela tagName e atribuir à uma variável
var diiv = window.document.getElementById('msg'); // selecionar a div pelo id e atribuir ela à uma variável
var titulo = window.document.querySelector('h1#title'); // selecionar a tag h1 pelo querySelector usando seletores css e atribuir ela á uma variável
paragrafo.style.color = 'yellow'; // mudando a cor da letra do parágrafo
diiv.innerText = 'Estou aguardando...'; // adicionando um texto a div
diiv.style.background = 'green'; // mudando o background da div
titulo.style.color = 'Red'; // mudando a cor do título