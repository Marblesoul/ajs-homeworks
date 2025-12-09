import Character from '../Character';

describe('Character', () => {
  describe('constructor', () => {
    test('should create character with valid name and type', () => {
      const char = new Character('Hero', 'Bowman');

      expect(char.name).toBe('Hero');
      expect(char.type).toBe('Bowman');
      expect(char.health).toBe(100);
      expect(char.level).toBe(1);
    });

    test('should throw error if name is too short', () => {
      expect(() => new Character('H', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    });

    test('should throw error if name is too long', () => {
      expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    });

    test('should throw error if name is not a string', () => {
      expect(() => new Character(123, 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    });

    test('should throw error if type is invalid', () => {
      expect(() => new Character('Hero', 'InvalidType')).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    });

    test('should accept name with exactly 2 characters', () => {
      const char = new Character('AB', 'Bowman');
      expect(char.name).toBe('AB');
    });

    test('should accept name with exactly 10 characters', () => {
      const char = new Character('TenCharact', 'Bowman');
      expect(char.name).toBe('TenCharact');
    });
  });

  describe('levelUp method', () => {
    test('should increase level by 1', () => {
      const char = new Character('Hero', 'Bowman');
      char.attack = 25;
      char.defence = 25;
      char.levelUp();

      expect(char.level).toBe(2);
    });

    test('should increase attack by 20%', () => {
      const char = new Character('Hero', 'Bowman');
      char.attack = 25;
      char.defence = 25;
      char.levelUp();

      expect(char.attack).toBe(30);
    });

    test('should increase defence by 20%', () => {
      const char = new Character('Hero', 'Bowman');
      char.attack = 25;
      char.defence = 25;
      char.levelUp();

      expect(char.defence).toBe(30);
    });

    test('should set health to 100', () => {
      const char = new Character('Hero', 'Bowman');
      char.attack = 25;
      char.defence = 25;
      char.health = 50;
      char.levelUp();

      expect(char.health).toBe(100);
    });

    test('should throw error if character is dead', () => {
      const char = new Character('Hero', 'Bowman');
      char.health = 0;

      expect(() => char.levelUp()).toThrow('Нельзя повысить левел умершего');
    });
  });

  describe('damage method', () => {
    test('should reduce health based on damage formula', () => {
      const char = new Character('Hero', 'Bowman');
      char.attack = 25;
      char.defence = 25;

      char.damage(10);

      expect(char.health).toBe(92.5);
    });

    test('should not make health negative', () => {
      const char = new Character('Hero', 'Bowman');
      char.attack = 25;
      char.defence = 25;

      char.damage(200);

      expect(char.health).toBe(0);
    });

    test('should calculate damage correctly with high defence', () => {
      const char = new Character('Hero', 'Magician');
      char.attack = 10;
      char.defence = 40;

      char.damage(100);

      expect(char.health).toBe(40);
    });

    test('should calculate damage correctly with low defence', () => {
      const char = new Character('Hero', 'Swordsman');
      char.attack = 40;
      char.defence = 10;

      char.damage(100);

      expect(char.health).toBe(10);
    });

    test('should not change health if character is already dead', () => {
      const char = new Character('Hero', 'Bowman');
      char.attack = 25;
      char.defence = 25;
      char.health = 0;

      char.damage(10);

      expect(char.health).toBe(0);
    });
  });
});
