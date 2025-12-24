import Team from './Team';
import TeamGenerator from './TeamGenerator';
import canIterate from './canIterate';

console.log('=== Задание 1: Team с обычным итератором ===');

const team1 = new Team();
const char1 = { name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 };
const char2 = { name: 'Маг', type: 'Magician', health: 30, level: 1, attack: 50, defence: 5 };
const char3 = { name: 'Мечник', type: 'Swordsman', health: 60, level: 1, attack: 35, defence: 15 };

team1.add(char1);
team1.add(char2);
team1.add(char3);

console.log('Итерация через for...of:');
for (const char of team1) {
  console.log(char);
}

console.log('');
console.log('=== Задание 2: TeamGenerator с генератором ===');

const team2 = new TeamGenerator();
const char4 = { name: 'Воин', type: 'Warrior', health: 70, level: 2, attack: 45, defence: 20 };
const char5 = { name: 'Жрец', type: 'Priest', health: 40, level: 2, attack: 20, defence: 8 };

team2.add(char4);
team2.add(char5);

console.log('Итерация через for...of:');
for (const char of team2) {
  console.log(char);
}

console.log('');
console.log('=== Задание 3: Функция canIterate ===');

console.log('canIterate(new Map()):', canIterate(new Map()));
console.log('canIterate(new Set()):', canIterate(new Set()));
console.log('canIterate("Netology"):', canIterate('Netology'));
console.log('canIterate([1, 2, 3]):', canIterate([1, 2, 3]));
console.log('canIterate(null):', canIterate(null));
console.log('canIterate(10):', canIterate(10));
console.log('canIterate({}):', canIterate({}));
console.log('canIterate(team1):', canIterate(team1));
console.log('canIterate(team2):', canIterate(team2));
