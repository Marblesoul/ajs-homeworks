import Character from './Character';

export default class Daemon extends Character {
  constructor(name, attack = 100) {
    super(name, 'Daemon', attack);
  }
}
