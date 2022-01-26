var area = window.document.getElementById('area'); // atribuindo uma variavel a div
area.addEventListener('click', clicar); // adicionando evento de click a div
area.addEventListener('mouseout', sair); // adicionando evento ao sair da div com o cursor
area.addEventListener('mouseenter', entrar); // adicionando evendo ao entrar na div com o cursor
        
function clicar() {
    area.innerText = 'Clicou!';
    area.style.background = 'red';
} // função que faz com que um clique na div mude o background e o texto da mesma

function entrar() {
    area.innerText = 'Entrou!';
} // função que muda o texto quando o cursor entra na div

function sair() {
    area.innerText = 'Saiu!';
    area.style.background = 'green';
} // função muda o background e o texto quando o cursor sai da div