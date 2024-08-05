// EACH FUNTION HAS PROTOTYPE PROPERTY WHICH CONTAIN ALL METHODS AND PROPERTIES OF THIS FUNCTION

// THE PROTOTYPE PASSES TO ANY INSTANCE CREATED WITH THIS FUNCTION TO INHERITE ITS PROPERTIES
function User(name) {
  this.name = name;
  this.getName = () => {
    return this.name;
  };
}

console.log(User.prototype);
const user1 = new User("ahmed");
const arr = [1, 2, 3, 4];
console.log(arr.constructor);

// THE PROTOTYPE OF CONSTRUCTOR INHERTE TO ALL INSTANCES
console.log(Array.prototype);

console.log(user1);
User.prototype.addTitle = () => `hello world`;

console.log(user1.addTitle());
Object.prototype.gamal = "ahmed gamal";

const obj = { 1: 2 };
console.log(obj.gamal);
