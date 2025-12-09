import './css/style.css';

import Character from './js/Character';
import Bowerman from './js/Bowerman';
import Swordsman from './js/Swordsman';
import Magician from './js/Magician';
import Daemon from './js/Daemon';
import Undead from './js/Undead';
import Zombie from './js/Zombie';

const bowerman = new Bowerman('Robin');
const swordsman = new Swordsman('Aragorn');
const magician = new Magician('Gandalf');

console.log('Bowerman:', bowerman);
console.log('Swordsman:', swordsman);
console.log('Magician:', magician);

bowerman.levelUp();
console.log('Bowerman after level up:', bowerman);

swordsman.damage(50);
console.log('Swordsman after damage(50):', swordsman);

export {
  Character,
  Bowerman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
};
