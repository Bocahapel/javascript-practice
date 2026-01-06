"use strict";

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const person1 = new Person("Adrian", 2000);
// console.log(person1);

// Person.prototype.calcAge = function () {
//   console.log(2010 - this.birthYear);
// };

// person1.calcAge();

const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`Current speed for ${this.brand} is: ${this.speed}`);
};

Car.prototype.break = function () {
  this.speed = this.speed - 10;
  console.log(`Current speed ${this.brand} is: ${this.speed}`);
};

const bmw = new Car("BMW", 120);

bmw.accelerate();
bmw.break();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
