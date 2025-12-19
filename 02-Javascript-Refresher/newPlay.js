const person = {
  name: "Godung",
  age: 17,
  greet() {
    return ("Hi! I'm " + this.name);
  }
};

console.log(person.greet());