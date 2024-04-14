
import {Person} from "./Week24_class_1_Person.m.js"


class Programmer extends Person {
    #yearOfExperience;

    constructor(_name, _age, _yearOfExperience) {
        super(_name, _age);
        this.#yearOfExperience = _yearOfExperience;
    }

    code () {
        console.log(`${this.name} is coding`);
    }
}

class TechLead extends Programmer {
    #teamMembers = []

    constructor(_name, _age, _yearOfExperience) {
        super(_name, _age, _yearOfExperience);
    }

    code () {
        console.log(`Tech Lead ${this.name} is coding as well as doing project planning`);
    }

    addTeamMember(programmer) {
        this.#teamMembers.push(programmer);
    }

    describeTeam() {
        console.log("# team members = ", this.#teamMembers.length);
        this.#teamMembers.forEach((member, id) => {
            console.log("member ", id, ": ", member.describe());
        })
    }
}

function developSoftware(programmers) {
    for (const programmer of programmers) {
        programmer.code();
    }
}

export default { Programmer, TechLead };
export { Person, developSoftware };
