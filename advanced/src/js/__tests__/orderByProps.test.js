import orderByProps from '../orderByProps';

describe('orderByProps', () => {
  test('should order properties according to orderArray and then alphabetically', () => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];

    const result = orderByProps(obj, ['name', 'level']);

    expect(result).toEqual(expected);
  });

  test('should handle empty object', () => {
    const expected = [];

    const result = orderByProps({}, ['name']);

    expect(result).toEqual(expected);
  });

  test('should handle empty orderArray - all properties alphabetically', () => {
    const obj = { z: 1, a: 2, m: 3 };
    const expected = [
      { key: 'a', value: 2 },
      { key: 'm', value: 3 },
      { key: 'z', value: 1 },
    ];

    const result = orderByProps(obj, []);

    expect(result).toEqual(expected);
  });

  test('should handle orderArray with non-existent properties', () => {
    const obj = { name: 'test', level: 5 };
    const expected = [
      { key: 'name', value: 'test' },
      { key: 'level', value: 5 },
    ];

    const result = orderByProps(obj, ['nonexistent', 'name']);

    expect(result).toEqual(expected);
  });

  test('should handle all properties in orderArray', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const expected = [
      { key: 'c', value: 3 },
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
    ];

    const result = orderByProps(obj, ['c', 'a', 'b']);

    expect(result).toEqual(expected);
  });

  test('should handle single property object', () => {
    const obj = { name: 'warrior' };
    const expected = [
      { key: 'name', value: 'warrior' },
    ];

    const result = orderByProps(obj, []);

    expect(result).toEqual(expected);
  });

  test('should handle properties with different value types', () => {
    const obj = {
      name: 'test', count: 0, active: false, data: null,
    };
    const expected = [
      { key: 'name', value: 'test' },
      { key: 'active', value: false },
      { key: 'count', value: 0 },
      { key: 'data', value: null },
    ];

    const result = orderByProps(obj, ['name']);

    expect(result).toEqual(expected);
  });
});
