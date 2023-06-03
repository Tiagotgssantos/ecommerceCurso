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

console.log(lista);

const listaFiltrada =lista.filter((pessoa) => pessoa.idade > 20);
/*no filter eu tenho que devolver um verdadeiro ou falço se for verdadeiro ele vai filtrar
se não for ele não filtra ou seja ele vai filtras as pessoas que tem mais 
mais de 20 anos, se não tiver ele não filtra*/
console.log(listaFiltrada);

const listaFiltrada2 =lista.filter((pessoa) => !!pessoa.exibir);
/*
pessoa.exibir = indefinido
!pessoa.exibir = verdadeiro
!!pessoa.exibir = falso*/
console.log(listaFiltrada2);


const filtrarPessoa=(pessoa)=>pessoa.nome === 'Fernanda';
const listaFiltrada3 = lista.filter(filtrarPessoa);
console.log(listaFiltrada3);