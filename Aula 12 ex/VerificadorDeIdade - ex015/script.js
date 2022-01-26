function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var nascimento = window.document.getElementById('ano');
    var resultado  = window.document.getElementById('resultado');

    if (nascimento.value.length == 0 || Number(nascimento.value) > ano) { // verifiaca se os dados são válidos
        window.alert('Verifique os dado e tente novamente!'); // se o tamanho da data de nascimento é igual 0 ou maior que o ano atual
    } else {
        var sexo = document.getElementsByName('sexo'); // adiciona dados a variável
        var idade = ano - Number(nascimento.value); // adiciona dados a variável idade que é ano menos data de nascimento 
        var genero = ''; // variavél indefinida
        var imagem = document.createElement('img'); // cria um elemento da tag img e atribui ele a uma variável
        imagem.setAttribute('id', 'foto');  // da o id da tag criada de foto

        if (sexo[0].checked) {
            genero = 'Masculino'; // caso o gênero 'Masculino' seja escolhido ele será atribuido a variável genero 
            
            if (idade >= 0 && idade < 10) { // caso idade se maior que 0 e menor que 10
                imagem.setAttribute('src', 'img/criançaH.png'); // aparecerá essa imagem
                imagem.style.width = '300px'; // com esse tamanho
                imagem.style.margin = '20px 20px 20px 20px'; // e essa margin
            } else if (idade < 21) { // o mesmo irá acontecer se atender ao critério com imagens diferentes
                imagem.setAttribute('src', 'img/jovemM.png');
                imagem.style.width = '300px';
                imagem.style.margin = '20px 20px 20px 20px';
            } else if (idade < 50) {
                imagem.setAttribute('src', 'img/homemA.png');
                imagem.style.width = '300px';
                imagem.style.margin = '20px 20px 20px 20px';
            } else {
                imagem.setAttribute('src', 'img/idoso.png');
                imagem.style.width = '300px';
                imagem.style.margin = '20px 20px 20px 20px';
            }
        } else if (sexo[1].checked) { // caso seja definido sexo 'Feminino'
            genero = 'Feminino'; // gereno recebera o valor 'Feminino'

            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', 'img/criançaM.png');
                imagem.style.width = '300px';
                imagem.style.margin = '20px 20px 20px 20px';
            } else if (idade < 21) {
                imagem.setAttribute('src', 'img/jovemF.png');
                imagem.style.width = '300px';
                imagem.style.margin = '20px 20px 20px 20px';
            } else if (idade < 50) {
                imagem.setAttribute('src', 'img/mulherA.png');
                imagem.style.width = '300px';
                imagem.style.margin = '20px 20px 20px 20px';
            } else {
                imagem.setAttribute('src', 'img/idosa.png');
                imagem.style.width = '300px';
                imagem.style.margin = '20px 20px 20px 20px';
            }
        }
        resultado.innerHTML = `Detectamos uma pessoa do gênero ${genero} com ${idade} anos.`;
        resultado.appendChild(imagem); // fara aparecer a imagem
    }
}