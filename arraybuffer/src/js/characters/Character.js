export default class Character {
  constructor(name, type, attack) {
    this.name = name;
    this.type = type;
    this.baseAttack = attack;
    this.stoned = false;
    this.distance = 1;
  }

  get attack() {
    const distanceModifier = 1 - (this.distance - 1) * 0.1;
    let calculatedAttack = this.baseAttack * distanceModifier;

    if (this.stoned) {
      calculatedAttack -= Math.log2(this.distance) * 5;
    }

    return Math.round(calculatedAttack);
  }

  set attack(value) {
    this.baseAttack = value;
  }
}
