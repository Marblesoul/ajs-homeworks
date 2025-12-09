import Daemon from '../Daemon';

describe('Daemon', () => {
  test('should create Daemon with valid name', () => {
    const daemon = new Daemon('Diablo');

    const expected = {
      name: 'Diablo',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };

    expect(daemon).toEqual(expected);
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
