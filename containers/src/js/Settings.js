export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSettings = new Map();
  }

  set(setting, value) {
    this.userSettings.set(setting, value);
  }

  get settings() {
    const merged = new Map(this.defaultSettings);

    this.userSettings.forEach((value, key) => {
      merged.set(key, value);
    });

    return merged;
  }
}
