// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

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
let cat = new Cat("cedi","male");
let dog = new Dog("Rufio", "male");

speak() {
        return `${this.name} says meow`;
    }


cat.speak();
