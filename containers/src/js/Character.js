export default class Character {
  constructor(name, type = 'Generic', level = 1) {
    if (!name || typeof name !== 'string') {
      throw new Error('Имя персонажа должно быть строкой');
    }

    this.name = name;
    this.type = type;
    this.level = level;
    this.health = 100;
  }
}
