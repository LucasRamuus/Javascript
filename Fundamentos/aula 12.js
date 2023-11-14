//Operador Spread

let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[...n1,...n2]// Spread ele espalha os dados dentro de uma unico espaço

console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3: " + n3)

//Operador Spread em Objeto
const jogador1={nome:"Lucas",energia:100,vidas:3,magia:150}
const jogador2={nome:"Ramos",energia:100,vidas:5,resistência:80}
const jogador3={...jogador1,...jogador2}

console.log(jogador3)

//Operador Spread em função

const soma=(v1,v2,v3)=>{
    return v1+v2+v3

}
 
let valores=[1,5,4]

console.log(soma(...valores))

//Operador Spread em DOM

const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]

/*
    Utilizando o Spread nas coleções de HTML ele se torna um array
    tendo mais opções de metodos por ter se tornado um array
*/
objs2.forEach(element =>{
    element.innerHTML='curso'
});
console.log(objs1)
console.log(objs2)

