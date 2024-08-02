// DEFINE OBJECT WITH NEW KEYWORD
let user = new Object();

user.firstName = "ahmed";
user.lastName = "gamal";
user["age"] = 20;

user.getFullName = () => `${user.firstName} ${user.lastName}`;

console.log(user);
