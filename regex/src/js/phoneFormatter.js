export default function formatPhone(phoneNumber) {
  // Шаг 1: Извлечь только цифры
  const digitsOnly = phoneNumber.replace(/\D/g, '');

  // Шаг 2: Обработать преобразование 8 -> 7 для российских номеров
  // Российский номер начинается с 8 и имеет 11 цифр
  let formattedDigits = digitsOnly;
  if (digitsOnly.startsWith('8') && digitsOnly.length === 11) {
    formattedDigits = '7' + digitsOnly.slice(1);
  }

  // Шаг 3: Добавить префикс +
  return '+' + formattedDigits;
}
