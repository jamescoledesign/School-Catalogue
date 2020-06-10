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

        return randomSub
    }
}