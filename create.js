// DEFINE OBJECT WITH CREATE
let mainObj = {
  hasDiscount: true,
  showMsg: function () {
    console.log(this);
    return ` you ${this.hasDiscount ? " " : "don't"} have discount`;
  },
};

console.log(mainObj.hasDiscount);
console.log(mainObj.showMsg());

let copiedObj = Object.create(mainObj);

copiedObj.hasDiscount = false;
console.log(copiedObj.hasDiscount);
console.log(copiedObj.showMsg());
