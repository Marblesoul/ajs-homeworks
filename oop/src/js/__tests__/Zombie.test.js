import Zombie from '../Zombie';

describe('Zombie', () => {
  test('should create Zombie with valid name', () => {
    const zombie = new Zombie('Walker');

    expect(zombie.name).toBe('Walker');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
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
