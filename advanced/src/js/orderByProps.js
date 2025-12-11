export default function orderByProps(obj, orderArray) {
  const orderedProps = [];
  const remainingProps = [];

  // Используем for...in как требуется в задании
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (orderArray.includes(key)) {
        orderedProps.push(key);
      } else {
        remainingProps.push(key);
      }
    }
  }

  // Сортируем ordered по индексу в orderArray
  orderedProps.sort((a, b) => orderArray.indexOf(a) - orderArray.indexOf(b));

  // Сортируем remaining в алфавитном порядке
  remainingProps.sort();

  // Объединяем и преобразуем в требуемый формат
  return [...orderedProps, ...remainingProps].map((key) => ({
    key,
    value: obj[key],
  }));
}
