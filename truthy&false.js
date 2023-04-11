//FALSE
const x = '';
//false
//console.log(!!x);

if (x) {
//    console.log(x)
}
//false

const y = 0;
//false
//console.log(!!x);

const a = null;
const b = undefined;
//false
//console.log(!!b);

//TRUE
const list = [];
const object = {};
console.log(!!object)

if (list) {
    console.log(list)
}
//verificar se uma lista é vazia
if (list.length > 0) {
    console.log(list)
}

console.log(!list); //false
console.log(!false); //true