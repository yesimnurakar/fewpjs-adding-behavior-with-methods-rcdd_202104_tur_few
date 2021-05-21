// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
          return `${this.name} says meow!`;
      }
}
let cat = new Cat("cedi","male");
cat.speak();

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
          return `${this.name} says woof!`;
      }
}
let dog = new Dog("Rufio", "male");
dog.speak();


class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
          return `${this.name} says woof!`;
      }
}
let bird = new Bird("Pablo", "male")
let bird2 = new Bird("Mable", "female")
