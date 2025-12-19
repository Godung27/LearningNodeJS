const name = "Godung";
let age = 27;
const isMan = true;

age = 30;

function user(name, age, isMan) {
  return (`User name ${name}, age ${age}, is a man: ${isMan}`);
}

console.log(user(name, age, isMan));