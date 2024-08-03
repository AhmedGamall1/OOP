// CONSTRUCTOR FUNCTION IS TO BUILD OBJECTS WITH

function Phone(serial, color, price) {
  this.serial = serial;
  this.color = color;
  this.price = price;
}

let phone1 = new Phone(39, "red", 399);
console.log(phone1);
