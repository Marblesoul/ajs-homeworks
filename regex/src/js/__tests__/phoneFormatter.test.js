import formatPhone from '../phoneFormatter';

describe('formatPhone', () => {
  describe('Russian numbers', () => {
    test('should format 8-prefix number with parentheses and hyphens', () => {
      const result = formatPhone('8 (927) 000-00-00');
      expect(result).toBe('+79270000000');
    });

    test('should format +7-prefix number with spaces', () => {
      const result = formatPhone('+7 960 000 00 00');
      expect(result).toBe('+79600000000');
    });

    test('should format 8-prefix number without spaces', () => {
      const result = formatPhone('8(927)000-00-00');
      expect(result).toBe('+79270000000');
    });

    test('should format 8-prefix number with only digits', () => {
      const result = formatPhone('89270000000');
      expect(result).toBe('+79270000000');
    });

    test('should format 7-prefix number without plus', () => {
      const result = formatPhone('7 960 000 00 00');
      expect(result).toBe('+79600000000');
    });

    test('should format 8-prefix with different separators', () => {
      const result = formatPhone('8-927-000-00-00');
      expect(result).toBe('+79270000000');
    });
  });

  describe('International numbers', () => {
    test('should format Chinese number', () => {
      const result = formatPhone('+86 000 000 0000');
      expect(result).toBe('+860000000000');
    });

    test('should format US number', () => {
      const result = formatPhone('+1 234 567 8900');
      expect(result).toBe('+12345678900');
    });

    test('should format UK number', () => {
      const result = formatPhone('+44 20 1234 5678');
      expect(result).toBe('+442012345678');
    });
  });

  describe('Edge cases', () => {
    test('should handle already formatted Russian number', () => {
      const result = formatPhone('+79270000000');
      expect(result).toBe('+79270000000');
    });

    test('should handle number with extra spaces', () => {
      const result = formatPhone('  8  (927)  000-00-00  ');
      expect(result).toBe('+79270000000');
    });

    test('should handle number with mixed separators', () => {
      const result = formatPhone('8 (927)-000 00-00');
      expect(result).toBe('+79270000000');
    });
  });
});
