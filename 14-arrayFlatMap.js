/*O método flatMap() é uma combinação dos métodos map() 
e flat() aplicados a um array em JavaScript. Ele permite 
mapear cada elemento do array para um novo valor e, 
em seguida, concatenar esses valores em um único array 
resultante. */

const lista = [
    {
        nome: 'jose',
        idade: 13,
        cartoes: ['3244', '5435']
    },
    {
        nome: 'joão',
        idade: 42,
        cartoes: ['321', '64']
    },
    {
        nome: 'Maria',
        idade: 23,
        cartoes: ['423', '654']
    },
    {
        nome: 'Gabriela',
        idade: 23,
        cartoes: ['543', '87']
    },
    {
        nome: 'Fernanda',
        idade: 65,
        cartoes: ['231', '76']
    },
    {
        nome: 'André',
        idade: 69,
        cartoes: ['324', '76']
    },
    {
        nome: 'Heitor',
        idade: 32,
        cartoes: ['432', '765']
    },
    {
        nome: 'Gustavo',
        idade: 64,
        cartoes: ['435', '765']
    },
    {
        nome: 'Sandra',
        idade: 33,
        cartoes: ['234', '654']
    },
]

const cartoes = lista.map((cartao) => cartao.cartoes);
console.log(cartoes);

const cartoes2 = lista.flatMap((cartao) => cartao.cartoes);
/*Ele pega uma lista que esta dentro de outra lista e transforma em uma lista simples */
console.log(cartoes2);



