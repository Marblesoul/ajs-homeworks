import Swordsman from '../Swordsman';

describe('Swordsman', () => {
  test('should create Swordsman with valid name', () => {
    const swordsman = new Swordsman('Aragorn');

    const expected = {
      name: 'Aragorn',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };

    expect(swordsman).toEqual(expected);
  });

  test('should throw error with invalid name', () => {
    expect(() => new Swordsman('VeryLongName')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });

  test('should inherit levelUp method', () => {
    const swordsman = new Swordsman('Aragorn');
    swordsman.levelUp();

    expect(swordsman.level).toBe(2);
    expect(swordsman.attack).toBe(48);
    expect(swordsman.defence).toBe(12);
  });

  test('should inherit damage method', () => {
    const swordsman = new Swordsman('Aragorn');
    swordsman.damage(10);

    expect(swordsman.health).toBe(91);
  });
});
