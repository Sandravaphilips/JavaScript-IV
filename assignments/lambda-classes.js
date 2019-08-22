// CODE here for your Lambda Classes

class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(name, age, location) {
        super(name, age, location);
        this.speciality = "redux";
        this.favLanguage = "Python";
        this.catchPhrase = "Don't forget the homies";
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(name, age, location) {
        super(name, age, location);
        this.previousBackground = "Media";
        this.className = "CS132";
        this.favSubjects = ["HTML", "PYTHON", "CSS", "JAVASCRIPT"];
    }

    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            return this.favSubjects[i];
        }
    }

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for 4 ${subject}`;
    }

    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}