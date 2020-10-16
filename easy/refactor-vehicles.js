// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getWheels() {
//     return 4;
//   }

//   info() {
//     return `${this.make} ${this.model}`
//   }
// }

// class Motorcycle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getWheels() {
//     return 2;
//   }

//   info() {
//     return `${this.make} ${this.model}`
//   }
// }

// class Truck {
//   constructor(make, model, payload) {
//     this.make = make;
//     this.model = model;
//     this.payload = payload;
//   }

//   getWheels() {
//     return 6;
//   }

//   info() {
//     return `${this.make} ${this.model}`
//   }
// }

// Above code Refactored

class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {}
class Motorcycle extends Vehicle {}

class Truck extends Vehicle {
  constructor(make, model, wheels, payLoad) {
    super(make, model, wheels);
    this.payLoad = payLoad;
  }
}
