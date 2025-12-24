import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const jsonString = await json(data);
    const savingData = JSON.parse(jsonString);
    return new GameSaving(savingData);
  }
}
