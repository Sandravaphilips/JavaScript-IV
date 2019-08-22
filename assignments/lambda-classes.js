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
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for 4 ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}



class ProjectManagers extends Instructor {
    constructor(name, age, location) {
        super(name, age, location);
        this.gradClassName = "CS1";
        this.favInstructor = "Gabe";
    }

    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const sandra = new ProjectManagers("Sandra", 23, "Nigeria");