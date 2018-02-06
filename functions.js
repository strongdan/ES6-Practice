// covers arrow functions, "this", destructuring, classes, super, extends

// ES5 Class
function Car(numCylinders, color, make, model) {
  this.numCylinders = numCylinders;
  this.color = color;
  this.make = make;
  this.model = model;
}

Car.prototype.drive = function () {
  console.log('driving...');
};

// ES6 Class
class Car {
  constructor(numCylinders, color, make, model) {
    this.numCylinders = numCylinders;
    this.color = color;
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log('driving…');
  }
}

typeof Car; // => function
