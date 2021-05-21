// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
          return `${this.name} says meow`;
      }
}
let cat = new Cat("cedi","male");
cat.speak();

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

let dog = new Dog("Rufio", "male");




cat.speak();
