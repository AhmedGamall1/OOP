// CLASS SYNTAX
class User {
  // STATIC PROPERTIES
  static counter = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    User.counter++;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }

  // STATIC METHODS
  static countObjects = function () {
    return `${this.counter} Objects Created`;
  };
}

let user1 = new User("ahmed", 22);
let user2 = new User("ali", 22);
console.log(user1.name);
console.log(user1.sayHello());
console.log(typeof User); // FUNCTION

console.log(User.countObjects());
