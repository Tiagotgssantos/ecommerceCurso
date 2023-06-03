/* A opção keys do Array é um recurso que permite converter 
um objeto em um array contendo suas chaves. Essa função é útil 
quando você precisa acessar apenas as chaves de um objeto e não 
os seus valores associados. */

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


const funcaoReduce = (acc, objeto) => {
    return{
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
    /*Explicando o codigo, o acc começa vazio ele recebe o objeto 
    depois ele acrescenta o jose idade 13, depois ele vai para o proximo e mantem 
    as informações e assim sucessivamente*/
}

const pessoas=lista.reduce(funcaoReduce, {});

const chaves= Object.keys(pessoas);

console.log(pessoas);

console.log(chaves);

console.log(Object.keys(lista[0]));
//vai exibir as a primeira chave do objeto


//trabando keys junto com map
const listaDeVolta =chaves.map((chave) =>({nome: chave, idade: pessoas[chave].idade}));
console.log(listaDeVolta);