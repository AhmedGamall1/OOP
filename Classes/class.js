// CLASS SYNTAX
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
      return `Hello ${this.name}`;
    };
  }
}

let user1 = new User("ahmed", 22);
console.log(user1.sayHello());
console.log(user1.name);
console.log(typeof User); // FUNCTION
