/*A função reduce() em JavaScript é usada para reduzir os 
elementos de um array a um único valor, aplicando uma 
função acumuladora a cada elemento. */

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

const pessoa ={
    jose: {
        idade:54, 
    },
    joao: {
        idade: 65,
    },
    maria: {
        idade: 23,
    }
}

pessoa.jose.idade;
/*Dessa forma eu consigo acessar o jose 
sem precisar percorreo array inteiro */

/*O reduce recebe:
A função  depois os dois parametros acc que é o acumulador depois o 
objeto.*/
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

const pessoas = lista.reduce((acc, objeto)=>{
    /*o reduce recebe dois itens o acc que é o 
    acumulador e o objeto que é cada linha que o meu array tem */

    return{
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}, {});
//no final ele tem um acumalador e neste caso ele esta vazio
//objeto vazio


console.log(pessoas);
console.log(pessoas.Gustavo.idade);
//dessa forma consigo buscar a idade do gustavo


//se eu quiser que um objeto não comece vazio 
const pessoas2 =lista.reduce(funcaoReduce, {
    julio: {
        idade:60
    }
});
console.log(pessoas2);
//agora ele vai começar com essa informação 
//mais os outros que foram adicionados


//começando com um array
const pessoasArray = lista.reduce((acc, objeto)=>{
    //vamos trabalhar como o map
    acc.push(objeto.idade);
    //dessa form estamos armazenando dentro do array
    return acc;
    //sempre retorna o acumulador
}, []);
console.log(pessoasArray);