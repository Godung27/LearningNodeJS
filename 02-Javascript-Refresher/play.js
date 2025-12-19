const name = "Godung";
let age = 27;
const isMan = true;

age = 30;

function user(name, age, isMan) {
  return (`User name ${name}, age ${age}, is a man: ${isMan}`);
}

const addArr = (a, b) => a + b;
const addOneArr = a => a + 1;
const num = () => 1 + 2;

console.log(user(name, age, isMan));
console.log(addArr(3, 4), addOneArr(1), num());