const person = {
  name: "Godung",
  age: 17,
  greet() {
    return ("Hi! I'm " + this.name);
  }
};

console.log(person.greet());

const copyPerson = { ...person }
console.log(copyPerson);

const { name, age } = person;
console.log(name, age);

const personName = function ({ name }) {
  console.log(name);
}
personName(person);

const hobbies = ["Game", "Climbing"];
const [hobby1, hobby2] = hobbies;

console.log(hobby1);

console.log(hobbies.map(hobby => "My Hobby: " + hobby));
console.log(hobbies);

hobbies.push("Coding");
console.log(hobbies);

const toArray = function (...num) {
  return num;
}

console.log(toArray(1, 2, 3));