/* a função find é utilizada principalmente em arrays 
para buscar o primeiro elemento que satisfaça uma 
determinada condição. Essa função recebe como argumento 
uma função de callback que é aplicada a cada elemento do array. 
A função de callback deve retornar true se o elemento 
atender à condição desejada e false caso contrário. */

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

//funçao anonima:
const novaPessoa = lista.find((pessoa) => pessoa.idade > 30);
/*O primeiro que ele encontrou foi o joão então ele 
não procura mais outros Array */
console.log(novaPessoa);

//função anonima
const novaPessoa2 = lista.find((pessoa) => pessoa.nome === 'Fernanda');
console.log(novaPessoa2);


const buscarPessoa = (pessoa)=> pessoa.nome === 'Fernanda';
const novaPessoa3 = lista.find(buscarPessoa);
console.log(novaPessoa3); 