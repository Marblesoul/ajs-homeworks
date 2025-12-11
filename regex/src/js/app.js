import sum from './basic';
import Validator from './Validator';
import formatPhone from './phoneFormatter';

console.log('worked');
console.log(sum([1, 2]));

// Демонстрация работы Validator
console.log('\n=== Validator Demo ===');
const validator = new Validator();

console.log('validateUsername("user"):', validator.validateUsername('user'));
console.log('validateUsername("User123"):', validator.validateUsername('User123'));
console.log('validateUsername("test_user"):', validator.validateUsername('test_user'));
console.log('validateUsername("123user"):', validator.validateUsername('123user'));
console.log('validateUsername("user1234"):', validator.validateUsername('user1234'));
console.log('validateUsername("_user"):', validator.validateUsername('_user'));

// Демонстрация работы formatPhone
console.log('\n=== Phone Formatter Demo ===');
console.log('formatPhone("8 (927) 000-00-00"):', formatPhone('8 (927) 000-00-00'));
console.log('formatPhone("+7 960 000 00 00"):', formatPhone('+7 960 000 00 00'));
console.log('formatPhone("+86 000 000 0000"):', formatPhone('+86 000 000 0000'));
