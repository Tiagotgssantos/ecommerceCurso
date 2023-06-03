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

/*const converterObjeto = (objeto) =>{
    return objeto.idade
}
console.log(lista.map(converterObjeto));

seria o mesmo que o console.log a baixo
*/
console.log(lista.map((objeto) => objeto.idade));
/*Array.map() é um método em JavaScript que permite criar um novo 
array com os resultados de chamar uma função fornecida em cada 
elemento do array original. Basicamente, ele permite aplicar 
uma função a cada elemento do array e obter um novo array com os resultados. */


const converterObjeto2 = (objeto2) =>{
    return objeto2.nome
}
console.log(lista.map(converterObjeto2));

/*muito utilizado quando vc precisar trazer so uma parte da informação 
do cliente do banco de dados */

const converterObjeto3 = (objeto3) =>{
    return{
        nome: objeto3.nome,
        idade: objeto3.idade,
    }
}
console.log(lista.map(converterObjeto3));

//caso eu queira adicionar mais um objeto
const converterObjeto4 = (objeto4)=>{
    return{
        nome:objeto4.nome,
        idade:objeto4.idade,
        nomeIdade:`${objeto4.nome} + ${objeto4.idade}`
    }
}
console.log(lista.map(converterObjeto4));

const converterObjeto5 = (objeto5)=>{
    return{
        ...objeto5,
        /*(spread operator) em JavaScript. Essa sintaxe 
        permite fazer uma cópia superficial (shallow copy) 
        de um objeto, copiando todas as propriedades 
        enumeráveis do objeto para um novo objeto. */
        nomeIdade:`${objeto5.nome} + ${objeto5.idade}`
    }
}
console.log(lista.map(converterObjeto5));