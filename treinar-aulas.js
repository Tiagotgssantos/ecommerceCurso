const lista=[
    {
        nome: 'Jose',
        idade: 35,
        cidade: 'Recife',
        sexo: 'masculino'
    },
    {
        nome: 'Carlos',
        idade: 20,
        cidade: 'Boa viagem',
        sexo: 'Masculino'
    },
    {
        nome: 'Luan',
        idade: 13,
        cidade: 'Olinda',
        sexo: 'Masculino'
    }
]


const converterObjeto01 = (objeto) =>{
    return objeto.idade
}
console.log(lista.map(converterObjeto01));

const converterObjeto02 = (objeto2) =>{
    return objeto2.nome
}
console.log(lista.map(converterObjeto02));

function converterObjeto03(objeto3){
    return objeto3.cidade
}
console.log(lista.map(converterObjeto03));

function converterObjeto04(objeto4){
    return objeto4.sexo
}
console.log(lista.map(converterObjeto04));

const converterObjeto05=(objeto5) =>{
    return{
        nome: objeto5.nome,
        idade: objeto5.idade,
    }
}
console.log(lista.map(converterObjeto05));

function converterObjeto06(objeto06){
    return{
        idade: objeto06.idade,
        sexo: objeto06.sexo,
    }
}
console.log(lista.map(converterObjeto06));

const converterObjeto07=(objeto07)=>{
    return{
        ...objeto07,
        informações: `${objeto07.nome} + ${objeto07.idade} + ${objeto07.cidade} + ${objeto07.sexo}`
    }
}
console.log(lista.map(converterObjeto07));

function converterObjeto08(objeto08){
    return{
        ...objeto08,
    }
}
console.log(lista.map(converterObjeto08));