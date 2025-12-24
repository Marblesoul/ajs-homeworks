import canIterate from '../canIterate';
import Team from '../Team';
import TeamGenerator from '../TeamGenerator';

describe('canIterate function', () => {
  test('should return true for Map', () => {
    expect(canIterate(new Map())).toBe(true);
  });

  test('should return true for Set', () => {
    expect(canIterate(new Set())).toBe(true);
  });

  test('should return true for string', () => {
    expect(canIterate('Netology')).toBe(true);
  });

  test('should return true for array', () => {
    expect(canIterate([1, 2, 3])).toBe(true);
  });

  test('should return false for null', () => {
    expect(canIterate(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(canIterate(undefined)).toBe(false);
  });

  test('should return false for number', () => {
    expect(canIterate(10)).toBe(false);
  });

  test('should return false for plain object', () => {
    expect(canIterate({})).toBe(false);
  });

  test('should return true for Team instance', () => {
    const team = new Team();
    expect(canIterate(team)).toBe(true);
  });

  test('should return true for TeamGenerator instance', () => {
    const team = new TeamGenerator();
    expect(canIterate(team)).toBe(true);
  });

  test('should return false for boolean', () => {
    expect(canIterate(true)).toBe(false);
  });

  test('should return false for function', () => {
    expect(canIterate(() => {})).toBe(false);
  });
});
