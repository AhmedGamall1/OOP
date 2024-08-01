// DEFINE OBJECT
const user = {
  // PROPERTIES
  firstName: "ahmed",
  lastName: "gamal",

  //METHODS
  getFullName: () => `Full Name ${user.firstName} ${user.lastName}`,
};

// ACCESS PROPERTIES
console.log(user.firstName); // DOT NOTATION
console.log(user["lastName"]); // BRACKET NOTATION

// ACCESS METHODS
console.log(user.getFullName());
