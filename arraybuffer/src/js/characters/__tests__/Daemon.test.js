import Daemon from '../Daemon';

describe('Daemon', () => {
  test('should create daemon with default attack', () => {
    const daemon = new Daemon('Lucifer');
    expect(daemon.name).toBe('Lucifer');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.baseAttack).toBe(100);
  });

  test('should create daemon with custom attack', () => {
    const daemon = new Daemon('Beelzebub', 120);
    expect(daemon.baseAttack).toBe(120);
  });

  test('should calculate attack at distance 1 (100%)', () => {
    const daemon = new Daemon('Lucifer', 100);
    daemon.distance = 1;
    expect(daemon.attack).toBe(100);
  });

  test('should calculate attack at distance 2 (90%)', () => {
    const daemon = new Daemon('Lucifer', 100);
    daemon.distance = 2;
    expect(daemon.attack).toBe(90);
  });

  test('should calculate attack at distance 3 (80%)', () => {
    const daemon = new Daemon('Lucifer', 100);
    daemon.distance = 3;
    expect(daemon.attack).toBe(80);
  });

  test('should calculate attack at distance 4 (70%)', () => {
    const daemon = new Daemon('Lucifer', 100);
    daemon.distance = 4;
    expect(daemon.attack).toBe(70);
  });

  test('should calculate attack at distance 5 (60%)', () => {
    const daemon = new Daemon('Lucifer', 100);
    daemon.distance = 5;
    expect(daemon.attack).toBe(60);
  });

  test('should apply stoned effect at distance 2 (example from task)', () => {
    const daemon = new Daemon('Lucifer', 100);
    daemon.distance = 2;
    daemon.stoned = true;
    expect(daemon.attack).toBe(85);
  });

  test('should apply stoned effect at distance 1', () => {
    const daemon = new Daemon('Lucifer', 100);
    daemon.distance = 1;
    daemon.stoned = true;
    expect(daemon.attack).toBe(100);
  });

  test('should apply stoned effect at distance 3', () => {
    const daemon = new Daemon('Lucifer', 100);
    daemon.distance = 3;
    daemon.stoned = true;
    const expected = Math.round(80 - Math.log2(3) * 5);
    expect(daemon.attack).toBe(expected);
  });

  test('should apply stoned effect at distance 5', () => {
    const daemon = new Daemon('Lucifer', 100);
    daemon.distance = 5;
    daemon.stoned = true;
    const expected = Math.round(60 - Math.log2(5) * 5);
    expect(daemon.attack).toBe(expected);
  });

  test('should set attack value', () => {
    const daemon = new Daemon('Lucifer', 100);
    daemon.attack = 150;
    expect(daemon.baseAttack).toBe(150);
    expect(daemon.attack).toBe(150);
  });

  test('should toggle stoned property', () => {
    const daemon = new Daemon('Lucifer', 100);
    expect(daemon.stoned).toBe(false);
    daemon.stoned = true;
    expect(daemon.stoned).toBe(true);
    daemon.stoned = false;
    expect(daemon.stoned).toBe(false);
  });
});
