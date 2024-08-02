// DEFINE OBJECT
const user = {
  // PROPERTIES
  firstName: "ahmed",
  lastName: "gamal",

  //NESTED OBJECT
  addresses: {
    eg: "egypt",
    us: "usa",

    getMainAddress: () => `Your Main Address is ${user.addresses.eg}`,
  },

  //METHODS
  getFullName: () => `Full Name ${user.firstName} ${user.lastName}`,
};

// ACCESS PROPERTIES
console.log(user.firstName); // DOT NOTATION
console.log(user["lastName"]); // BRACKET NOTATION
console.log(user.addresses.eg);

// ACCESS METHODS
console.log(user.getFullName());
console.log(user.addresses.getMainAddress());
