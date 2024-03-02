export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('This character has already been added to the team');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach(character => this.members.add(character));
    }

    toArray() {
        return Array.from(this.members);
    }
}

