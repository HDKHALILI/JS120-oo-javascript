// Using the following code, create two classes - Truck and Car - that both
// inherit from Vehicle.

class Vehicle {
  constructor(year) {
    this.year = year;
  }

  startEngine() {
    return "Ready to go!";
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
  }

  startEngine(speed) {
    // we can use super to call object's parent's method
    console.log(`${super.startEngine()} Drive ${speed}, please!`);
  }
}

class Car extends Vehicle {}

let truck1 = new Truck();
console.log(truck1.startEngine("fast"));

let truck2 = new Truck();
console.log(truck2.startEngine("slow"));
