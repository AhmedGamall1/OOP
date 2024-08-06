// GETTERS & SETTERS TO GET SIMPLE SYNTAX
// PRIVATE METHODS AND PROPS
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // COMPUTED PROPERTY NOT METHOD
  get showInfo() {
    return `Hello your name is ${this.name} & your age is ${this.age}`;
  }

  set changeAge(newAge) {
    this.age = newAge;
  }
}

let user1 = new User("ahmed", 22);

// ERROR
// console.log(user1.showInfo());
user1.changeAge = 26;
console.log(user1.age);
console.log(user1.showInfo);
