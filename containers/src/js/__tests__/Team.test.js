import Team from '../Team';
import Character from '../Character';

describe('Team', () => {
  describe('constructor', () => {
    test('should create team with empty Set', () => {
      const team = new Team();

      expect(team.members).toBeInstanceOf(Set);
      expect(team.members.size).toBe(0);
    });
  });

  describe('add method', () => {
    test('should add character to team', () => {
      const team = new Team();
      const character = new Character('Hero');

      team.add(character);

      expect(team.members.has(character)).toBe(true);
      expect(team.members.size).toBe(1);
    });

    test('should add multiple different characters', () => {
      const team = new Team();
      const character1 = new Character('Hero1');
      const character2 = new Character('Hero2');

      team.add(character1);
      team.add(character2);

      expect(team.members.size).toBe(2);
      expect(team.members.has(character1)).toBe(true);
      expect(team.members.has(character2)).toBe(true);
    });

    test('should throw error when adding duplicate character', () => {
      const team = new Team();
      const character = new Character('Hero');

      team.add(character);

      expect(() => team.add(character)).toThrow('Персонаж уже находится в команде');
    });

    test('should maintain same object reference (Set behavior)', () => {
      const team = new Team();
      const character = new Character('Hero');

      team.add(character);
      const array = team.toArray();

      expect(array[0]).toBe(character);
    });
  });

  describe('addAll method', () => {
    test('should add multiple characters at once', () => {
      const team = new Team();
      const character1 = new Character('Hero1');
      const character2 = new Character('Hero2');
      const character3 = new Character('Hero3');

      team.addAll(character1, character2, character3);

      expect(team.members.size).toBe(3);
      expect(team.members.has(character1)).toBe(true);
      expect(team.members.has(character2)).toBe(true);
      expect(team.members.has(character3)).toBe(true);
    });

    test('should add characters with rest parameters syntax', () => {
      const team = new Team();
      const characters = [
        new Character('Hero1'),
        new Character('Hero2'),
      ];

      team.addAll(...characters);

      expect(team.members.size).toBe(2);
    });

    test('should not throw error on duplicate characters', () => {
      const team = new Team();
      const character = new Character('Hero');

      expect(() => {
        team.addAll(character, character);
      }).not.toThrow();
    });

    test('should deduplicate automatically when adding same character', () => {
      const team = new Team();
      const character = new Character('Hero');

      team.addAll(character, character, character);

      expect(team.members.size).toBe(1);
    });

    test('should handle empty arguments (no characters)', () => {
      const team = new Team();

      team.addAll();

      expect(team.members.size).toBe(0);
    });

    test('should handle mix of new and duplicate characters', () => {
      const team = new Team();
      const character1 = new Character('Hero1');
      const character2 = new Character('Hero2');

      team.add(character1);
      team.addAll(character1, character2);

      expect(team.members.size).toBe(2);
    });
  });

  describe('toArray method', () => {
    test('should convert Set to Array', () => {
      const team = new Team();
      const character = new Character('Hero');

      team.add(character);
      const array = team.toArray();

      expect(Array.isArray(array)).toBe(true);
      expect(array.length).toBe(1);
      expect(array[0]).toBe(character);
    });

    test('should return empty array for empty team', () => {
      const team = new Team();

      const array = team.toArray();

      expect(Array.isArray(array)).toBe(true);
      expect(array.length).toBe(0);
    });

    test('should return array with same characters', () => {
      const team = new Team();
      const character1 = new Character('Hero1');
      const character2 = new Character('Hero2');

      team.add(character1);
      team.add(character2);
      const array = team.toArray();

      expect(array).toContain(character1);
      expect(array).toContain(character2);
    });

    test('should return array that can be modified without affecting team', () => {
      const team = new Team();
      const character1 = new Character('Hero1');

      team.add(character1);
      const array = team.toArray();

      array.push(new Character('Hero2'));

      expect(team.members.size).toBe(1);
      expect(team.toArray().length).toBe(1);
    });
  });

  describe('integration', () => {
    test('should work together: add, addAll, toArray', () => {
      const team = new Team();
      const character1 = new Character('Hero1');
      const character2 = new Character('Hero2');
      const character3 = new Character('Hero3');

      team.add(character1);
      team.addAll(character2, character3);

      const array = team.toArray();

      expect(array.length).toBe(3);
      expect(array).toContain(character1);
      expect(array).toContain(character2);
      expect(array).toContain(character3);
    });

    test('should maintain Set uniqueness across add and addAll', () => {
      const team = new Team();
      const character = new Character('Hero');

      team.add(character);
      team.addAll(character);

      expect(team.members.size).toBe(1);
    });
  });
});
