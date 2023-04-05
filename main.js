//CRIANDO UMA LISTA

const names = ["Felipe", "João", "Julia", 10, false];
//Os valores da lista podem ser de qualquer tipo;

const joao = names[1];
//começa a contagem do 0
console.log(joao)

//ADD ELEMENTOS EM UMA LISTA

//adiciona um elemento no final do array
//names.push('Pedro'); colocando isso como comentário remove o "false"

names.push('Pedro'); 
console.log(names);

//adiciona um elemento no inicio
names.unshift("Fernanda");

console.log(names)

//REMOVENDO VALORES DE UMA LISTA

//remove o ultimo elemento da lista
names.pop();
names.pop();
names.pop();

names[3] = "Gustavo" //agora o terceiro elemento não é mais a júlia, e sim o gustavo
console.log(names);

