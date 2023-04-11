//ENTENDENDO CLASSES
class Person {
    constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    }

    getFullName() {   //criando métodos
      console.log `${this.firstName} + ${this.lastName}`
    } 
}

const person = new Person('Joana', 'Darc', 40);

person.getFullName();
