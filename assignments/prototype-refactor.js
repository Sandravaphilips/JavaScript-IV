/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// TASK 1
class Person {
  constructor(name, age) {
    this.myName = name;
    this.myAge = age;
    this.myStomach = [];
  }
    
  greet() {
    return `My name is ${this.myName}. I am ${this.myAge} years old.`;
  }
  
  eatEdibles(edible) {
    this.myStomach.push(edible);
  }
  poop() {
    this.myStomach = [];
    return this.myStomach
  }
}


// TASK 2
class Car {
  constructor(model, name, make) {
    this.carModel = model;
    this.carName = name;
    this.carMake = make;
    this.odometer = 0;
    this.isRepaired = true; 
  }
    
  driveADistance(distance) {
    return this.odometer += distance;
  }

  crash() {
    return `"I crashed at ${this.odometer} miles!"`
  }

  isRepairedOrNot() {
    if (this.isRepaired) {
      return;
    } else return this.isRepaired = false;
  }
}

// TASK 3
class babyConstructor extends Person {
  play() {
    return `It's time to play!!`;
  }
}


// TASK 4
class LambdaProject {
  constructor(protypejs, thisjs, challenges) {
    this.myPrototype = protypejs;
    this.myThis = thisjs;
    this.feelingGood = false;
    this.timeSpent = 0;
    this.timeAllocated = 14400;
    this.myChallenges = challenges;
  }
}