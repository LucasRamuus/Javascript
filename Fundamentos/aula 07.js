/* Operadores lógicos
   && and 
   !! or 
   !  not 
*/

/*
    Tabela (And --> &&)
    true and true   = true
    true and false  = false
    false and true  = false
    false and false = false

    tabale (Or --> ||)
    true or true   = true
    true or false  = true
    false or true  = true
    false or false = false

    tabela (Not --> !)
    not true  = false
    not false = true
    */

let n1=10,n2=5,n3=15,n4=2

console.log((n1>n2) && (n1>n3)) //false
console.log((n1>n2) || (n1>n3)) //true
console.log(!(n1>n2) || (n1>n3))//false