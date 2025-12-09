import Magician from '../Magician';

describe('Magician', () => {
  test('should create Magician with valid name', () => {
    const magician = new Magician('Gandalf');

    const expected = {
      name: 'Gandalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };

    expect(magician).toEqual(expected);
  });

  test('should throw error with invalid name', () => {
    expect(() => new Magician('G')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });

  test('should inherit levelUp method', () => {
    const magician = new Magician('Gandalf');
    magician.levelUp();

    expect(magician.level).toBe(2);
    expect(magician.attack).toBe(12);
    expect(magician.defence).toBe(48);
  });

  test('should inherit damage method', () => {
    const magician = new Magician('Gandalf');
    magician.damage(10);

    expect(magician.health).toBe(94);
  });
});
