import Validator from '../Validator';

describe('Validator', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  describe('validateUsername - valid cases', () => {
    test('should accept simple lowercase username', () => {
      const result = validator.validateUsername('user');
      expect(result).toBe(true);
    });

    test('should accept username with mixed case and digits', () => {
      const result = validator.validateUsername('User123z');
      expect(result).toBe(true);
    });

    test('should accept username with underscores', () => {
      const result = validator.validateUsername('test_user');
      expect(result).toBe(true);
    });

    test('should accept username with hyphens', () => {
      const result = validator.validateUsername('user-name');
      expect(result).toBe(true);
    });

    test('should accept username with digits spread out', () => {
      const result = validator.validateUsername('a1b2c');
      expect(result).toBe(true);
    });

    test('should accept username with 3 consecutive digits in middle', () => {
      const result = validator.validateUsername('test999user');
      expect(result).toBe(true);
    });

    test('should accept single letter username', () => {
      const result = validator.validateUsername('A');
      expect(result).toBe(true);
    });

    test('should accept two letter username', () => {
      const result = validator.validateUsername('Ab');
      expect(result).toBe(true);
    });
  });

  describe('validateUsername - invalid cases', () => {
    test('should reject username starting with digit', () => {
      const result = validator.validateUsername('123user');
      expect(result).toBe(false);
    });

    test('should reject username ending with digit', () => {
      const result = validator.validateUsername('user1');
      expect(result).toBe(false);
    });

    test('should reject username starting with underscore', () => {
      const result = validator.validateUsername('_user');
      expect(result).toBe(false);
    });

    test('should reject username ending with underscore', () => {
      const result = validator.validateUsername('user_');
      expect(result).toBe(false);
    });

    test('should reject username starting with hyphen', () => {
      const result = validator.validateUsername('-user');
      expect(result).toBe(false);
    });

    test('should reject username ending with hyphen', () => {
      const result = validator.validateUsername('user-');
      expect(result).toBe(false);
    });

    test('should reject username with 4 consecutive digits', () => {
      const result = validator.validateUsername('user1234');
      expect(result).toBe(false);
    });

    test('should reject username with 5 consecutive digits in middle', () => {
      const result = validator.validateUsername('test12345user');
      expect(result).toBe(false);
    });

    test('should reject username with invalid character @', () => {
      const result = validator.validateUsername('user@test');
      expect(result).toBe(false);
    });

    test('should reject username with space', () => {
      const result = validator.validateUsername('user test');
      expect(result).toBe(false);
    });

    test('should reject username with cyrillic characters', () => {
      const result = validator.validateUsername('пользователь');
      expect(result).toBe(false);
    });

    test('should reject empty string', () => {
      const result = validator.validateUsername('');
      expect(result).toBe(false);
    });
  });
});
