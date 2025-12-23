export default class ErrorRepository {
  constructor() {
    this.errors = new Map();

    this.errors.set(404, 'Ресурс не найден');
    this.errors.set(500, 'Внутренняя ошибка сервера');
    this.errors.set(403, 'Доступ запрещён');
    this.errors.set(401, 'Требуется авторизация');
    this.errors.set(400, 'Некорректный запрос');
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
