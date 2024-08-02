// DELETE OPERATOR
let user = { name: "ahmed", age: 20 };
delete user.name;
console.log(user);

console.log(delete user.age); //TRUE

// OBJ FREEZE CANT ASSIGN OR DELETE VALUE FROM
let freezedObj = Object.freeze({ name: "gamal" });
delete freezedObj.name;
console.log(delete freezedObj.name); //FALSE
console.log(freezedObj);

// DEFINE PROP
const obj = {};
Object.defineProperty(obj, "prop", { value: 2, configurable: false });
console.log(obj);
console.log(delete obj.prop); //FALSE
