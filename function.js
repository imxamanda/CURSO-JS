// ENTENDENDO FUNÇÕES
function sum(a, b) {
   console.log(a + b);
}

sum(2, 10);
//
function sum(a, b) {
    return a + b;
 }
 
//const sumValue = sum (2, 2);

//console.log(sumValue);

//PASSANDO VALORES PADRÕES PARA PARÂMETROS
function sum(a, b = 10) {
    return a + b;
 }

//const sumArrow = (a, b) =>{
//    return a + b;
//}

const sumArrow = (a, b) =>  a + b; //não precisa do return entre chaves {}


const sumValue = sumArrow (2);

console.log(sumValue);

