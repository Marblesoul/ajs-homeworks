import extractSpecialAttacks from '../specialAttacks';

describe('extractSpecialAttacks', () => {
  test('should extract special attacks with default description for missing ones', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };
    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ];

    const result = extractSpecialAttacks(character);

    expect(result).toEqual(expected);
  });

  test('should handle empty special array', () => {
    const character = {
      name: 'Warrior',
      special: [],
    };
    const expected = [];

    const result = extractSpecialAttacks(character);

    expect(result).toEqual(expected);
  });

  test('should handle single special attack with description', () => {
    const character = {
      name: 'Mage',
      special: [
        {
          id: 1,
          name: 'Fireball',
          icon: 'http://fire.png',
          description: 'Throws a fireball',
        },
      ],
    };
    const expected = [
      {
        id: 1,
        name: 'Fireball',
        icon: 'http://fire.png',
        description: 'Throws a fireball',
      },
    ];

    const result = extractSpecialAttacks(character);

    expect(result).toEqual(expected);
  });

  test('should handle single special attack without description', () => {
    const character = {
      name: 'Rogue',
      special: [
        {
          id: 5,
          name: 'Stealth',
          icon: 'http://stealth.png',
        },
      ],
    };
    const expected = [
      {
        id: 5,
        name: 'Stealth',
        icon: 'http://stealth.png',
        description: 'Описание недоступно',
      },
    ];

    const result = extractSpecialAttacks(character);

    expect(result).toEqual(expected);
  });

  test('should handle all attacks without descriptions', () => {
    const character = {
      name: 'Knight',
      special: [
        { id: 1, name: 'Attack1', icon: 'http://1.png' },
        { id: 2, name: 'Attack2', icon: 'http://2.png' },
      ],
    };
    const expected = [
      {
        id: 1, name: 'Attack1', icon: 'http://1.png', description: 'Описание недоступно',
      },
      {
        id: 2, name: 'Attack2', icon: 'http://2.png', description: 'Описание недоступно',
      },
    ];

    const result = extractSpecialAttacks(character);

    expect(result).toEqual(expected);
  });

  test('should handle all attacks with descriptions', () => {
    const character = {
      name: 'Paladin',
      special: [
        {
          id: 10, name: 'Holy Strike', icon: 'http://holy.png', description: 'Divine damage',
        },
        {
          id: 11, name: 'Heal', icon: 'http://heal.png', description: 'Restores health',
        },
      ],
    };
    const expected = [
      {
        id: 10, name: 'Holy Strike', icon: 'http://holy.png', description: 'Divine damage',
      },
      {
        id: 11, name: 'Heal', icon: 'http://heal.png', description: 'Restores health',
      },
    ];

    const result = extractSpecialAttacks(character);

    expect(result).toEqual(expected);
  });

  test('should only extract specified fields even if extra fields present', () => {
    const character = {
      name: 'Assassin',
      special: [
        {
          id: 7,
          name: 'Poison',
          icon: 'http://poison.png',
          description: 'Poisons enemy',
          damage: 50,
          duration: 10,
        },
      ],
    };
    const expected = [
      {
        id: 7,
        name: 'Poison',
        icon: 'http://poison.png',
        description: 'Poisons enemy',
      },
    ];

    const result = extractSpecialAttacks(character);

    expect(result).toEqual(expected);
    expect(Object.keys(result[0])).toEqual(['id', 'name', 'icon', 'description']);
  });
});
