import Swordsman from '../Swordsman';

describe('Swordsman', () => {
  test('should create Swordsman with valid name', () => {
    const swordsman = new Swordsman('Aragorn');

    expect(swordsman.name).toBe('Aragorn');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
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
