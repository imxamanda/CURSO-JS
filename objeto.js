//ACESSANDO PROPRIEDADES DE UM OBJETO

const person = {
   firstName: "Amanda",
   lastName: "Vieira",
   age: "20",
   hobbies: ['Ler', 'Musica', 'Desenho'],
   dog: {
    name: "Simba",
    age: 4,
   }
};

//const firstName = person.firstName;
//const lastName = person.lastName;
//const age = person.age;
//const hobbies = person.hobbies;

//const read = person.hobbies[2];


//ENTENDENDO DESTRUCTION
//ADD OBJETOS DENTRO DE UM OBJETO
//ADD PROPRIEDADES A UM OBJETO

// mesma coisa do exemplo acima, mas mais fácil (usando destruction)
const {
     firstName: primeiroNome, 
     lastName,
     age, 
     hobbies, 
     dog: { name: dogName }, 
    } = person;

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);
//console.log(read);

//person.dog = "Simba"


console.log(person.dog.age);
console.log(dogName);

