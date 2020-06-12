class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(input) {
        if(typeof input === 'number') {
            this._numberOfStudents = input;
        } else {
            return 'Invalid input: numberOfStudents must be set to a Number.'
        }
    }

    quickFacts() {
        console.log(`${this_.name} educates ${this._numberOfStudents} at the ${this._level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {  
       
       const randomSub = Math.floor(substituteTeachers.length * Math.random());

    return substituteTeachers[randomSub];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, numberOfStudents);
        this._level = 'primary';
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}