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

const hobbies = ["Game", "Climbing"];

console.log(hobbies.map(hobby => "My Hobby: " + hobby));
console.log(hobbies);

hobbies.push("Coding");
console.log(hobbies);

const toArray = function (...num) {
  return num;
}

console.log(toArray(1, 2, 3));