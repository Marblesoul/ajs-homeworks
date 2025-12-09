import Undead from '../Undead';

describe('Undead', () => {
  test('should create Undead with valid name', () => {
    const undead = new Undead('Skeleton');

    expect(undead.name).toBe('Skeleton');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
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
