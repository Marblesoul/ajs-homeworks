import Settings from '../Settings';

describe('Settings', () => {
  describe('constructor', () => {
    test('should create settings with default values', () => {
      const settings = new Settings();

      expect(settings.defaultSettings).toBeInstanceOf(Map);
      expect(settings.userSettings).toBeInstanceOf(Map);
    });

    test('should have theme set to dark by default', () => {
      const settings = new Settings();

      expect(settings.defaultSettings.get('theme')).toBe('dark');
    });

    test('should have music set to trance by default', () => {
      const settings = new Settings();

      expect(settings.defaultSettings.get('music')).toBe('trance');
    });

    test('should have difficulty set to easy by default', () => {
      const settings = new Settings();

      expect(settings.defaultSettings.get('difficulty')).toBe('easy');
    });

    test('should have empty user settings initially', () => {
      const settings = new Settings();

      expect(settings.userSettings.size).toBe(0);
    });
  });

  describe('set method', () => {
    test('should set user setting', () => {
      const settings = new Settings();

      settings.set('theme', 'light');

      expect(settings.userSettings.get('theme')).toBe('light');
    });

    test('should override user setting if called twice', () => {
      const settings = new Settings();

      settings.set('theme', 'light');
      settings.set('theme', 'gray');

      expect(settings.userSettings.get('theme')).toBe('gray');
    });

    test('should set setting not in defaults', () => {
      const settings = new Settings();

      settings.set('volume', 'high');

      expect(settings.userSettings.get('volume')).toBe('high');
    });
  });

  describe('settings getter', () => {
    test('should return all defaults when no user settings', () => {
      const settings = new Settings();

      const result = settings.settings;

      expect(result.get('theme')).toBe('dark');
      expect(result.get('music')).toBe('trance');
      expect(result.get('difficulty')).toBe('easy');
    });

    test('should merge user setting over default (theme)', () => {
      const settings = new Settings();

      settings.set('theme', 'light');

      expect(settings.settings.get('theme')).toBe('light');
      expect(settings.settings.get('music')).toBe('trance');
      expect(settings.settings.get('difficulty')).toBe('easy');
    });

    test('should merge user setting over default (music)', () => {
      const settings = new Settings();

      settings.set('music', 'rock');

      expect(settings.settings.get('theme')).toBe('dark');
      expect(settings.settings.get('music')).toBe('rock');
      expect(settings.settings.get('difficulty')).toBe('easy');
    });

    test('should merge user setting over default (difficulty)', () => {
      const settings = new Settings();

      settings.set('difficulty', 'hard');

      expect(settings.settings.get('theme')).toBe('dark');
      expect(settings.settings.get('music')).toBe('trance');
      expect(settings.settings.get('difficulty')).toBe('hard');
    });

    test('should merge multiple user settings', () => {
      const settings = new Settings();

      settings.set('theme', 'gray');
      settings.set('music', 'chillout');

      const result = settings.settings;

      expect(result.get('theme')).toBe('gray');
      expect(result.get('music')).toBe('chillout');
      expect(result.get('difficulty')).toBe('easy');
    });

    test('should merge all user settings overriding all defaults', () => {
      const settings = new Settings();

      settings.set('theme', 'light');
      settings.set('music', 'pop');
      settings.set('difficulty', 'nightmare');

      const result = settings.settings;

      expect(result.get('theme')).toBe('light');
      expect(result.get('music')).toBe('pop');
      expect(result.get('difficulty')).toBe('nightmare');
    });

    test('should include new user setting not in defaults', () => {
      const settings = new Settings();

      settings.set('volume', 'high');

      const result = settings.settings;

      expect(result.get('volume')).toBe('high');
      expect(result.get('theme')).toBe('dark');
    });

    test('should return Map instance', () => {
      const settings = new Settings();

      const result = settings.settings;

      expect(result).toBeInstanceOf(Map);
    });

    test('should return new Map on each call (not cached)', () => {
      const settings = new Settings();

      const result1 = settings.settings;
      const result2 = settings.settings;

      expect(result1).not.toBe(result2);
    });

    test('should not modify defaultSettings when user changes settings', () => {
      const settings = new Settings();

      settings.set('theme', 'light');
      settings.settings;

      expect(settings.defaultSettings.get('theme')).toBe('dark');
    });

    test('should have correct size (3 defaults)', () => {
      const settings = new Settings();

      const result = settings.settings;

      expect(result.size).toBe(3);
    });
  });

  describe('integration', () => {
    test('should handle complete workflow: construct, set, get', () => {
      const settings = new Settings();

      settings.set('theme', 'gray');
      settings.set('music', 'off');

      const result = settings.settings;

      expect(result.get('theme')).toBe('gray');
      expect(result.get('music')).toBe('off');
      expect(result.get('difficulty')).toBe('easy');
      expect(result.size).toBe(3);
    });

    test('should handle multiple settings changes', () => {
      const settings = new Settings();

      settings.set('theme', 'light');
      const result1 = settings.settings;

      settings.set('theme', 'dark');
      const result2 = settings.settings;

      expect(result1.get('theme')).toBe('light');
      expect(result2.get('theme')).toBe('dark');
    });
  });
});
