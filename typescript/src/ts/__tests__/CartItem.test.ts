import CartItem from '../domain/CartItem';
import Book from '../domain/Book';
import Gadget from '../domain/Gadget';

describe('CartItem', () => {
  test('should create CartItem with default quantity 1', () => {
    const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
    const cartItem = new CartItem(book);

    expect(cartItem.item).toEqual(book);
    expect(cartItem.quantity).toBe(1);
  });

  test('should create CartItem with specified quantity', () => {
    const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
    const cartItem = new CartItem(book, 5);

    expect(cartItem.item).toEqual(book);
    expect(cartItem.quantity).toBe(5);
  });

  test('should throw error if quantity is less than 1', () => {
    const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);

    expect(() => new CartItem(book, 0)).toThrow('Quantity must be at least 1');
    expect(() => new CartItem(book, -1)).toThrow('Quantity must be at least 1');
  });

  test('getTotalPrice should calculate price times quantity', () => {
    const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
    const cartItem = new CartItem(book, 3);

    expect(cartItem.getTotalPrice()).toBe(3000);
  });

  test('increaseQuantity should increase quantity by default 1', () => {
    const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
    const cartItem = new CartItem(book, 2);

    cartItem.increaseQuantity();

    expect(cartItem.quantity).toBe(3);
  });

  test('increaseQuantity should increase quantity by specified amount', () => {
    const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
    const cartItem = new CartItem(book, 2);

    cartItem.increaseQuantity(5);

    expect(cartItem.quantity).toBe(7);
  });

  test('decreaseQuantity should decrease quantity by default 1', () => {
    const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
    const cartItem = new CartItem(book, 3);

    const result = cartItem.decreaseQuantity();

    expect(result).toBe(true);
    expect(cartItem.quantity).toBe(2);
  });

  test('decreaseQuantity should decrease quantity by specified amount', () => {
    const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
    const cartItem = new CartItem(book, 5);

    const result = cartItem.decreaseQuantity(3);

    expect(result).toBe(true);
    expect(cartItem.quantity).toBe(2);
  });

  test('decreaseQuantity should return false if result would be less than 1', () => {
    const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
    const cartItem = new CartItem(book, 2);

    const result = cartItem.decreaseQuantity(3);

    expect(result).toBe(false);
    expect(cartItem.quantity).toBe(2);
  });

  test('decreaseQuantity should not allow quantity to become 0', () => {
    const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
    const cartItem = new CartItem(book, 1);

    const result = cartItem.decreaseQuantity(1);

    expect(result).toBe(false);
    expect(cartItem.quantity).toBe(1);
  });
});

describe('Gadget', () => {
  test('should create gadget with all fields', () => {
    const gadget = new Gadget(1, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

    expect(gadget.id).toBe(1);
    expect(gadget.name).toBe('iPhone 15');
    expect(gadget.price).toBe(50000);
    expect(gadget.brand).toBe('Apple');
    expect(gadget.model).toBe('iPhone 15 Pro');
    expect(gadget.allowMultiple).toBe(true);
  });

  test('should allow setting allowMultiple to false', () => {
    const gadget = new Gadget(2, 'MacBook Pro', 100000, 'Apple', 'MacBook Pro 16', false);

    expect(gadget.allowMultiple).toBe(false);
  });

  test('should implement Buyable interface', () => {
    const gadget = new Gadget(3, 'Samsung Galaxy', 40000, 'Samsung', 'Galaxy S23');

    expect(gadget).toHaveProperty('id');
    expect(gadget).toHaveProperty('name');
    expect(gadget).toHaveProperty('price');
    expect(typeof gadget.id).toBe('number');
    expect(typeof gadget.name).toBe('string');
    expect(typeof gadget.price).toBe('number');
  });
});
