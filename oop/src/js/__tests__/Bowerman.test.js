import Bowerman from '../Bowerman';

describe('Bowerman', () => {
  test('should create Bowerman with valid name', () => {
    const bowerman = new Bowerman('Robin');

    const expected = {
      name: 'Robin',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    expect(bowerman).toEqual(expected);
  });

  test('should throw error with invalid name', () => {
    expect(() => new Bowerman('A')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });

  test('should inherit levelUp method', () => {
    const bowerman = new Bowerman('Robin');
    bowerman.levelUp();

    expect(bowerman.level).toBe(2);
    expect(bowerman.attack).toBe(30);
    expect(bowerman.defence).toBe(30);
  });

  test('should inherit damage method', () => {
    const bowerman = new Bowerman('Robin');
    bowerman.damage(10);

    expect(bowerman.health).toBe(92.5);
  });
});
