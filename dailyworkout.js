//Day 1, Condition

const isAdult = function (age) {
  const ageTest = Number(age);

  if (ageTest < 0) {
    console.log("Invalid Number");
  }
  if (ageTest < 18 && ageTest >= 0) {
    console.log("Is not an adult");
  }
  if (ageTest >= 18) {
    console.log("Is adult");
  }

  console.log(`The age: ${ageTest}`);
  console.log(typeof ageTest);
};

isAdult("18");

const greet = function (greeting) {
  console.log(greeting + ", " + this.name);
};

const user = { name: "Alex" };

greet.call(user, "Hello");
