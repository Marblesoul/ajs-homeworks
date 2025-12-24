import ArrayBufferConverter from '../ArrayBufferConverter';

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

describe('ArrayBufferConverter', () => {
  test('should create converter instance', () => {
    const converter = new ArrayBufferConverter();
    expect(converter).toBeDefined();
    expect(converter.buffer).toBeNull();
  });

  test('should load buffer', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.buffer).toBe(buffer);
  });

  test('should return empty string when buffer is not loaded', () => {
    const converter = new ArrayBufferConverter();
    expect(converter.toString()).toBe('');
  });

  test('should convert buffer to string', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    const result = converter.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });

  test('should convert buffer to valid JSON', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    const result = converter.toString();
    const parsed = JSON.parse(result);
    expect(parsed).toEqual({
      data: {
        user: {
          id: 1,
          name: 'Hitman',
          level: 10,
        },
      },
    });
  });

  test('should handle buffer with different data', () => {
    const converter = new ArrayBufferConverter();
    const testData = 'Hello, World!';
    const buffer = new ArrayBuffer(testData.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < testData.length; i++) {
      bufferView[i] = testData.charCodeAt(i);
    }
    converter.load(buffer);
    expect(converter.toString()).toBe(testData);
  });
});
