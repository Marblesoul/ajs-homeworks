import read from '../reader';

describe('read', () => {
  test('should return a promise that resolves with ArrayBuffer', async () => {
    const result = await read();

    expect(result).toBeInstanceOf(ArrayBuffer);

    const view = new Uint16Array(result);
    const str = String.fromCharCode.apply(null, Array.from(view));
    const data = JSON.parse(str);

    expect(data).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });
  });
});
