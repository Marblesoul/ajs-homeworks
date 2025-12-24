import Character from './Character';

export default class Magician extends Character {
  constructor(name, attack = 100) {
    super(name, 'Magician', attack);
  }
}
