export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    if (!this.buffer) {
      return '';
    }

    const view = new Uint16Array(this.buffer);
    let result = '';

    for (let i = 0; i < view.length; i++) {
      result += String.fromCharCode(view[i]);
    }

    return result;
  }
}
