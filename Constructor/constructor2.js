function User(name, email, age) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.updateName = function (newName) {
    this.name = newName;
  };
}

let user1 = new User("ahmed", "f", 40);

console.log(user1.name);
user1.updateName("gamal");
console.log(user1.name);
