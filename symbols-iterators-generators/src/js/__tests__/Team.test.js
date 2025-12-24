import Team from '../Team';

describe('Team with iterator', () => {
  test('should create empty team', () => {
    const team = new Team();
    expect(team.members.size).toBe(0);
  });

  test('should add character to team', () => {
    const team = new Team();
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };

    team.add(character);
    expect(team.members.size).toBe(1);
  });

  test('should throw error when adding duplicate character', () => {
    const team = new Team();
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };

    team.add(character);
    expect(() => team.add(character)).toThrow('Character already exists in the team');
  });

  test('should iterate through characters using for...of', () => {
    const team = new Team();
    const char1 = { name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 };
    const char2 = { name: 'Маг', type: 'Magician', health: 30, level: 1, attack: 50, defence: 5 };

    team.add(char1);
    team.add(char2);

    const characters = [];
    for (const char of team) {
      characters.push(char);
    }

    expect(characters).toEqual([char1, char2]);
  });

  test('should iterate through characters using spread operator', () => {
    const team = new Team();
    const char1 = { name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 };
    const char2 = { name: 'Маг', type: 'Magician', health: 30, level: 1, attack: 50, defence: 5 };

    team.add(char1);
    team.add(char2);

    const characters = [...team];

    expect(characters).toEqual([char1, char2]);
  });

  test('should return characters in correct order', () => {
    const team = new Team();
    const char1 = { name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 };
    const char2 = { name: 'Маг', type: 'Magician', health: 30, level: 1, attack: 50, defence: 5 };
    const char3 = { name: 'Мечник', type: 'Swordsman', health: 60, level: 1, attack: 35, defence: 15 };

    team.add(char1);
    team.add(char2);
    team.add(char3);

    const characters = [...team];

    expect(characters[0]).toBe(char1);
    expect(characters[1]).toBe(char2);
    expect(characters[2]).toBe(char3);
  });

  test('should work with multiple iterations', () => {
    const team = new Team();
    const char1 = { name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 };
    const char2 = { name: 'Маг', type: 'Magician', health: 30, level: 1, attack: 50, defence: 5 };

    team.add(char1);
    team.add(char2);

    const firstIteration = [...team];
    const secondIteration = [...team];

    expect(firstIteration).toEqual(secondIteration);
  });
});
