//For in e For of
let num=[10,20,30,40,50]

//For tradicional
for(let i=0;i<num.length;i++){
    console.log(num[i])
}
//For in
for(n in num){
    console.log(num[n])
}
//for of
for(n of num){
    console.log(n)
}

/*
const objs=document.getElementsByTagName("div")

let num=[10,20,30,40,50]

for(o of objs){
    console.log(o.innerHTML="Curso")
}

for(o in objs){
    console.log(objs[o].innerHTML)
}
*/