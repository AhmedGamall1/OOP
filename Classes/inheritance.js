// PARENT CLASS
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }
}

// CHILD CLASS , METHODS INHERITED
class Admin extends User {
  constructor(name, email) {
    // TO INHERITE PROPS
    super(name, email);
  }

  adminMsg() {
    return `You are Admin`;
  }

  // OVERRIDE PARENT METHOD
  sayHello() {
    return `Hello Admin ${this.name}`;
  }
}

let admin1 = new Admin("ahmed", "ag@gmail.com");
console.log(admin1.adminMsg());
console.log(admin1.sayHello());
console.log(admin1.name);
