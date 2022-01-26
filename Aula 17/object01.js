var amigo = {nome: 'Alisson',
sexo: 'Masculino',
Idade: 24,
peso: 70,
engordar(p=0){
    if (p > 0){
        console.log('Engordou!');
    }
    
    this.peso += p;
}
};

console.log(amigo.engordar(0));
console.log(amigo);
console.log(amigo.nome); // mostrar apenas nome