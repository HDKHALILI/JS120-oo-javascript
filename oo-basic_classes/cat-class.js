class Cat {
  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }

  constructor(name) {
    this.name = name;
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}`);
  }

  rename(newName) {
    this.name = newName;
  }
}

let kitty = new Cat("Sophie");
kitty.personalGreeting();
console.log(kitty.name); // Sophie
kitty.rename("Chloe");
console.log(kitty.name); // Chloe
Cat.genericGreeting();
