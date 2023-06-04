/*Em JavaScript, o objeto Array possui um método embutido 
chamado sort(), que pode ser usado para classificar os elementos de um array. O método sort() classifica o array em ordem lexicográfica (alfabética) por padrão. Isso significa que os elementos são convertidos em strings e comparados com base em seus valores Unicode. */


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

//ordenando pela idade
lista.sort((a, b)=>{
    //ele recebe dois parametros A e B
    if(a.idade < b.idade){
        return -1;
    }
    if(a.idade > b.idade){
        return 1;
    }
    return 0;
    //caso idade seja igual ele não ordena
});
console.log(lista);

lista.sort((a, b)=>{
    //ele recebe dois parametros A e B
    if(a.nome.toUpperCase() < b.nome.toUpperCase()){
        //toUpperCase convertê-la em letras maiúsculas
        return -1;
    }
    if(a.nome.toUpperCase() > b.nome.toUpperCase()){
        return 1;
    }
    return 0;
    //caso idade seja igual ele não ordena
});
console.log(lista);