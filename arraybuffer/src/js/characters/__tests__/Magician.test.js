import Magician from '../Magician';

describe('Magician', () => {
  test('should create magician with default attack', () => {
    const magician = new Magician('Merlin');
    expect(magician.name).toBe('Merlin');
    expect(magician.type).toBe('Magician');
    expect(magician.baseAttack).toBe(100);
  });

  test('should create magician with custom attack', () => {
    const magician = new Magician('Gandalf', 120);
    expect(magician.baseAttack).toBe(120);
  });

  test('should calculate attack at distance 1 (100%)', () => {
    const magician = new Magician('Merlin', 100);
    magician.distance = 1;
    expect(magician.attack).toBe(100);
  });

  test('should calculate attack at distance 2 (90%)', () => {
    const magician = new Magician('Merlin', 100);
    magician.distance = 2;
    expect(magician.attack).toBe(90);
  });

  test('should calculate attack at distance 3 (80%)', () => {
    const magician = new Magician('Merlin', 100);
    magician.distance = 3;
    expect(magician.attack).toBe(80);
  });

  test('should calculate attack at distance 4 (70%)', () => {
    const magician = new Magician('Merlin', 100);
    magician.distance = 4;
    expect(magician.attack).toBe(70);
  });

  test('should calculate attack at distance 5 (60%)', () => {
    const magician = new Magician('Merlin', 100);
    magician.distance = 5;
    expect(magician.attack).toBe(60);
  });

  test('should apply stoned effect at distance 2 (example from task)', () => {
    const magician = new Magician('Merlin', 100);
    magician.distance = 2;
    magician.stoned = true;
    expect(magician.attack).toBe(85);
  });

  test('should apply stoned effect at distance 1', () => {
    const magician = new Magician('Merlin', 100);
    magician.distance = 1;
    magician.stoned = true;
    expect(magician.attack).toBe(100);
  });

  test('should apply stoned effect at distance 3', () => {
    const magician = new Magician('Merlin', 100);
    magician.distance = 3;
    magician.stoned = true;
    const expected = Math.round(80 - Math.log2(3) * 5);
    expect(magician.attack).toBe(expected);
  });

  test('should apply stoned effect at distance 5', () => {
    const magician = new Magician('Merlin', 100);
    magician.distance = 5;
    magician.stoned = true;
    const expected = Math.round(60 - Math.log2(5) * 5);
    expect(magician.attack).toBe(expected);
  });

  test('should set attack value', () => {
    const magician = new Magician('Merlin', 100);
    magician.attack = 150;
    expect(magician.baseAttack).toBe(150);
    expect(magician.attack).toBe(150);
  });

  test('should toggle stoned property', () => {
    const magician = new Magician('Merlin', 100);
    expect(magician.stoned).toBe(false);
    magician.stoned = true;
    expect(magician.stoned).toBe(true);
    magician.stoned = false;
    expect(magician.stoned).toBe(false);
  });
});
