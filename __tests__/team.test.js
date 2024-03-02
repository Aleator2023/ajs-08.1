import { Team } from '../src/team.js';
import { Character } from '../src/character.js';

describe('Team class', () => {
    let team;
    let character1;
    let character2;

    beforeEach(() => {
        team = new Team();
        character1 = new Character('Character 1', 1);
        character2 = new Character('Character 2', 2);
    });    
    
    test('should add a character to the team', () => {
        team.add(character1);
        expect(team.members.has(character1)).toBeTruthy();
    });

    test('should throw an error when adding a duplicate character', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('This character has already been added to the team');
    });

    test('should add multiple characters using addAll', () => {
        team.addAll(character1, character2);
        expect(team.members.has(character1)).toBeTruthy();
        expect(team.members.has(character2)).toBeTruthy();
    });

    test('should not have duplicates when using addAll', () => {
        team.addAll(character1, character1); // Trying to add character1 twice
        expect(team.toArray().length).toBe(1); // Only one instance should be present
    });

    test('toArray method should convert Set to Array', () => {
        team.addAll(character1, character2);
        const array = team.toArray();
        expect(Array.isArray(array)).toBeTruthy();
        expect(array).toContain(character1);
        expect(array).toContain(character2);
    });
});
