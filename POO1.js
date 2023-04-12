//ENTENDENDO CLASSES
class Person {
  constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
  }
  //criando métodos
  getFullName() {
    console.log `${this.firstName} ${this.lastName}`
  }

  static speak() { //criando métodos estáticos
    console.log("Hello World!");
  }
}

const person  = new Person("Jane", "Doe", 36);

console.log(person);

Person.speak();
