// DEFINE OBJECT WITH ASSIGN
let target = {
  prop3: "30",
};
let object = {
  prop1: "10",
  prop2: "20",
  method1: () => "hello world",
};

Object.assign(target, object);
const newObj = Object.assign({}, target, { prop4: "40" });

console.log(target);
console.log(newObj);
