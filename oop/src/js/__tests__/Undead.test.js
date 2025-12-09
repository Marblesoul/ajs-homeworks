import Undead from '../Undead';

describe('Undead', () => {
  test('should create Undead with valid name', () => {
    const undead = new Undead('Skeleton');

    const expected = {
      name: 'Skeleton',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    expect(undead).toEqual(expected);
  });

  test('should throw error with invalid name', () => {
    expect(() => new Undead('U')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });

  test('should inherit levelUp method', () => {
    const undead = new Undead('Skeleton');
    undead.levelUp();

    expect(undead.level).toBe(2);
    expect(undead.attack).toBe(30);
    expect(undead.defence).toBe(30);
  });

  test('should inherit damage method', () => {
    const undead = new Undead('Skeleton');
    undead.damage(10);

    expect(undead.health).toBe(92.5);
  });
});
