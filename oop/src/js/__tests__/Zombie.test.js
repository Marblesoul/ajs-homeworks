import Zombie from '../Zombie';

describe('Zombie', () => {
  test('should create Zombie with valid name', () => {
    const zombie = new Zombie('Walker');

    const expected = {
      name: 'Walker',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };

    expect(zombie).toEqual(expected);
  });

  test('should throw error with invalid name', () => {
    expect(() => new Zombie('Z')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });

  test('should inherit levelUp method', () => {
    const zombie = new Zombie('Walker');
    zombie.levelUp();

    expect(zombie.level).toBe(2);
    expect(zombie.attack).toBe(48);
    expect(zombie.defence).toBe(12);
  });

  test('should inherit damage method', () => {
    const zombie = new Zombie('Walker');
    zombie.damage(10);

    expect(zombie.health).toBe(91);
  });
});
