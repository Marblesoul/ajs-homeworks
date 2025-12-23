import ErrorRepository from '../ErrorRepository';

describe('ErrorRepository', () => {
  describe('constructor', () => {
    test('should create repository with pre-populated errors', () => {
      const repository = new ErrorRepository();

      expect(repository.errors).toBeInstanceOf(Map);
      expect(repository.errors.size).toBeGreaterThan(0);
    });

    test('should have at least 5 error codes', () => {
      const repository = new ErrorRepository();

      expect(repository.errors.size).toBeGreaterThanOrEqual(5);
    });
  });

  describe('translate method', () => {
    test('should return error description for known code 404', () => {
      const repository = new ErrorRepository();

      expect(repository.translate(404)).toBe('Ресурс не найден');
    });

    test('should return error description for known code 500', () => {
      const repository = new ErrorRepository();

      expect(repository.translate(500)).toBe('Внутренняя ошибка сервера');
    });

    test('should return error description for known code 403', () => {
      const repository = new ErrorRepository();

      expect(repository.translate(403)).toBe('Доступ запрещён');
    });

    test('should return error description for known code 401', () => {
      const repository = new ErrorRepository();

      expect(repository.translate(401)).toBe('Требуется авторизация');
    });

    test('should return error description for known code 400', () => {
      const repository = new ErrorRepository();

      expect(repository.translate(400)).toBe('Некорректный запрос');
    });

    test('should return "Unknown error" for unknown code', () => {
      const repository = new ErrorRepository();

      expect(repository.translate(999)).toBe('Unknown error');
    });

    test('should return "Unknown error" for code 0', () => {
      const repository = new ErrorRepository();

      expect(repository.translate(0)).toBe('Unknown error');
    });

    test('should return "Unknown error" for negative code', () => {
      const repository = new ErrorRepository();

      expect(repository.translate(-1)).toBe('Unknown error');
    });

    test('should handle undefined code', () => {
      const repository = new ErrorRepository();

      expect(repository.translate(undefined)).toBe('Unknown error');
    });

    test('should handle null code', () => {
      const repository = new ErrorRepository();

      expect(repository.translate(null)).toBe('Unknown error');
    });

    test('should return "Unknown error" for very large code', () => {
      const repository = new ErrorRepository();

      expect(repository.translate(999999)).toBe('Unknown error');
    });
  });
});
