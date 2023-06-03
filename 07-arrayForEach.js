/*O laço forEach é uma forma de iterar sobre os elementos de um array em JavaScript 
(e em outras linguagens de programação também). Ele permite executar uma função para 
cada elemento do array, fornecendo uma maneira simples e concisa de percorrer os 
elementos sem precisar usar um laço for tradicional. 
Em outras palavras é uma substituição do for se tornando bem 
mais simples*/

const lista = [
    {
        nome: 'jose',
        idade: 13
    },
    {
        nome: 'joão',
        idade: 42
    },
    {
        nome: 'Maria',
        idade: 23
    },
    {
        nome: 'Gabriela',
        idade: 23
    },
    {
        nome: 'Fernanda',
        idade: 65
    },
    {
        nome: 'André',
        idade: 69
    },
    {
        nome: 'Heitor',
        idade: 32
    },
    {
        nome: 'Gustavo',
        idade: 64
    },
    {
        nome: 'Sandra',
        idade: 33
    },
]

/*for(let i=0; i< lista.length; i++){
    //length tamanho da lista
    console.log(lista[i]);
}

for(let i=0; i< lista.length; i++){
    soma += lista[i].idade
}
console.log('soma: ', soma);
*/

//primeiro exemplo de forEach
lista.forEach((objeto)=> console.log(objeto));


//segundo exemplo de forEach com função anonima
//a função não tem nome
let soma = 0;
lista.forEach((objeto)=>{
    soma += objeto.idade
});
console.log('Soma: ', soma);


//terceiro exemplo de forEach
const somaIdade = (objeto)=>{
    soma += objeto.idade
}
lista.forEach(somaIdade);
console.log('soma: ', soma)
