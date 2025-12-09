import Daemon from '../Daemon';

describe('Daemon', () => {
  test('should create Daemon with valid name', () => {
    const daemon = new Daemon('Diablo');

    expect(daemon.name).toBe('Diablo');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('should throw error with invalid name', () => {
    expect(() => new Daemon('VeryLongDaemon')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });

  test('should inherit levelUp method', () => {
    const daemon = new Daemon('Diablo');
    daemon.levelUp();

    expect(daemon.level).toBe(2);
    expect(daemon.attack).toBe(12);
    expect(daemon.defence).toBe(48);
  });

  test('should inherit damage method', () => {
    const daemon = new Daemon('Diablo');
    daemon.damage(10);

    expect(daemon.health).toBe(94);
  });
});
