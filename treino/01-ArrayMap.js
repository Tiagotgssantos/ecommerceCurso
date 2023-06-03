const lista=[
    {
        nome: 'Tiago',
        idade: '32',
        estado:'Pernambuco'
    },
    {
        nome:'Luiz',
        idade:'18',
        estado:'São Paulo'
    },
    {
        nome:'Pedro',
        idade:'25',
        estado:'Amazonas'
    }

]

console.log(lista.map((objeto)=>objeto.estado));
console.log(lista.map((objeto2)=>objeto2.idade));
console.log(lista.map((objeto3)=>objeto3.nome));

const converterObjeto01=(objeto4)=>{
    return {
        nome: objeto4.nome,
        idade:objeto4.idade,
    }
}
console.log(lista.map(converterObjeto01));

const converterObjeto02=(objeto05)=>{
    return{
        nomeIdade: `${objeto05.nome} + ${objeto05.idade}`
    }
}
console.log(lista.map(converterObjeto02));

const converterObjeto03=(objeto06)=>{
    return{
        ...objeto06
    }
}
console.log(lista.map(converterObjeto03));

//um exemplo de função comum
function converterObjeto04(objeto7) {
    return {
      estado: objeto7.estado,
    };
  }
  console.log(lista.map(converterObjeto04));
  