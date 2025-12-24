export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Character already exists in the team');
    }
    this.members.add(character);
  }

  [Symbol.iterator]() {
    const members = Array.from(this.members);
    let index = 0;

    return {
      next() {
        if (index < members.length) {
          return {
            value: members[index++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
