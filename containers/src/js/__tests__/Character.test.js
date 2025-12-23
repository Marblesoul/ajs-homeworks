import Character from '../Character';

describe('Character', () => {
  describe('constructor', () => {
    test('should create character with valid parameters', () => {
      const character = new Character('Hero', 'Warrior', 5);

      expect(character.name).toBe('Hero');
      expect(character.type).toBe('Warrior');
      expect(character.level).toBe(5);
      expect(character.health).toBe(100);
    });

    test('should create character with default type and level', () => {
      const character = new Character('Hero');

      expect(character.name).toBe('Hero');
      expect(character.type).toBe('Generic');
      expect(character.level).toBe(1);
      expect(character.health).toBe(100);
    });

    test('should throw error if name is not provided', () => {
      expect(() => new Character()).toThrow('Имя персонажа должно быть строкой');
    });

    test('should throw error if name is not a string', () => {
      expect(() => new Character(123)).toThrow('Имя персонажа должно быть строкой');
    });

    test('should throw error if name is empty string', () => {
      expect(() => new Character('')).toThrow('Имя персонажа должно быть строкой');
    });

    test('should set health to 100 by default', () => {
      const character = new Character('Hero');

      expect(character.health).toBe(100);
    });
  });
});
