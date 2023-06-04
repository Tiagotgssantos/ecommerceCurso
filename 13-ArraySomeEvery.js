/*o método some() é usado para verificar se pelo menos um elemento 
de um array atende a uma determinada condição. Ele percorre cada 
elemento do array e retorna true assim que encontrar um elemento 
que satisfaça a condição especificada. Caso nenhum elemento atenda 
à condição, o método retorna false. */

const lista = [
    {
        nome: 'jose',
        idade: 13,
        exibir: true
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

const resultadoSome =lista.some((objeto) => objeto.idade > 50);

console.log('resultado:', resultadoSome);

/*o método every() é usado para verificar se todos os elementos 
de um array atendem a uma determinada condição. Ele percorre 
cada elemento do array e retorna true se todos os elementos 
satisfizerem a condição especificada. Caso algum elemento não 
atenda à condição, o método retorna false. */
const resultadoEvery = lista.every((objeto) => objeto.idade > 50);
console.log('resultado:',resultadoEvery);
