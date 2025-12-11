export default class Validator {
  validateUsername(username) {
    // Проверка 1: Только латинские буквы, цифры, дефис и подчёркивание
    const validCharsPattern = /^[a-zA-Z0-9_-]+$/;
    if (!validCharsPattern.test(username)) {
      return false;
    }

    // Проверка 2: Не более 3 цифр подряд (если есть 4+ цифры подряд - невалидно)
    const consecutiveDigitsPattern = /\d{4,}/;
    if (consecutiveDigitsPattern.test(username)) {
      return false;
    }

    // Проверка 3: Должно начинаться и заканчиваться буквами
    // Проверяем отдельно случай с одной буквой и с несколькими символами
    const singleLetterPattern = /^[a-zA-Z]$/;
    const startsEndsWithLetterPattern = /^[a-zA-Z].*[a-zA-Z]$/;

    if (!singleLetterPattern.test(username) && !startsEndsWithLetterPattern.test(username)) {
      return false;
    }

    return true;
  }
}
