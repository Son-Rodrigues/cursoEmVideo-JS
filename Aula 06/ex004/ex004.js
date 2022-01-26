var nome = window.prompt('Qual o seu nome?');
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras.`); // para termose o retorno na página web
document.write(`Seu nome em letras maiúsculas é ${nome.toUpperCase()}.`);
document.write(`Em minúsculas é ${nome.toLowerCase()}.`);