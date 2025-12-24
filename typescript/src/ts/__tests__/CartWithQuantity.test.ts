import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import Gadget from '../domain/Gadget';

describe('Cart with quantity support', () => {
  describe('Adding items with quantity', () => {
    test('should add item with specified quantity', () => {
      const cart = new Cart();
      const gadget = new Gadget(1, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(gadget, 3);

      expect(cart.items.length).toBe(1);
      expect(cart.itemsWithQuantity[0].quantity).toBe(3);
    });

    test('should add gadget with default quantity 1', () => {
      const cart = new Cart();
      const gadget = new Gadget(1, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(gadget);

      expect(cart.items.length).toBe(1);
      expect(cart.itemsWithQuantity[0].quantity).toBe(1);
    });

    test('adding same gadget should increase quantity', () => {
      const cart = new Cart();
      const gadget = new Gadget(1, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(gadget, 2);
      cart.add(gadget, 3);

      expect(cart.items.length).toBe(1);
      expect(cart.itemsWithQuantity[0].quantity).toBe(5);
    });

    test('adding same electronic item should not increase quantity', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);

      cart.add(book);
      cart.add(book);

      expect(cart.items.length).toBe(1);
      expect(cart.itemsWithQuantity[0].quantity).toBe(1);
    });

    test('adding same movie should not increase quantity', () => {
      const cart = new Cart();
      const movie = new Movie(1, 'Inception', 500, 2010, 'USA', 'Sci-Fi', 148);

      cart.add(movie, 2);
      cart.add(movie, 3);

      expect(cart.items.length).toBe(1);
      expect(cart.itemsWithQuantity[0].quantity).toBe(2);
    });

    test('should handle mix of gadgets and electronic items', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      const gadget = new Gadget(2, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(book);
      cart.add(gadget, 2);
      cart.add(book);
      cart.add(gadget, 1);

      expect(cart.items.length).toBe(2);
      expect(cart.itemsWithQuantity[0].quantity).toBe(1);
      expect(cart.itemsWithQuantity[1].quantity).toBe(3);
    });
  });

  describe('getTotalPrice with quantity', () => {
    test('should calculate total price with quantity for single item', () => {
      const cart = new Cart();
      const gadget = new Gadget(1, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(gadget, 3);

      expect(cart.getTotalPrice()).toBe(150000);
    });

    test('should calculate total price with quantity for multiple items', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      const gadget = new Gadget(2, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(book, 1);
      cart.add(gadget, 2);

      expect(cart.getTotalPrice()).toBe(101000);
    });

    test('getTotalPriceWithDiscount should work with quantity', () => {
      const cart = new Cart();
      const gadget = new Gadget(1, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(gadget, 2);

      expect(cart.getTotalPriceWithDiscount(10)).toBe(90000);
    });
  });

  describe('decreaseQuantity', () => {
    test('should decrease quantity by 1', () => {
      const cart = new Cart();
      const gadget = new Gadget(1, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(gadget, 3);
      const result = cart.decreaseQuantity(1);

      expect(result).toBe(true);
      expect(cart.itemsWithQuantity[0].quantity).toBe(2);
    });

    test('should decrease quantity by specified amount', () => {
      const cart = new Cart();
      const gadget = new Gadget(1, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(gadget, 5);
      const result = cart.decreaseQuantity(1, 3);

      expect(result).toBe(true);
      expect(cart.itemsWithQuantity[0].quantity).toBe(2);
    });

    test('should return false if item not found', () => {
      const cart = new Cart();

      const result = cart.decreaseQuantity(999);

      expect(result).toBe(false);
    });

    test('should return false if decrease would make quantity less than 1', () => {
      const cart = new Cart();
      const gadget = new Gadget(1, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(gadget, 2);
      const result = cart.decreaseQuantity(1, 5);

      expect(result).toBe(false);
      expect(cart.itemsWithQuantity[0].quantity).toBe(2);
    });

    test('should not allow quantity to become 0', () => {
      const cart = new Cart();
      const gadget = new Gadget(1, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(gadget, 1);
      const result = cart.decreaseQuantity(1, 1);

      expect(result).toBe(false);
      expect(cart.items.length).toBe(1);
      expect(cart.itemsWithQuantity[0].quantity).toBe(1);
    });
  });

  describe('itemsWithQuantity', () => {
    test('should return items with quantity information', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      const gadget = new Gadget(2, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(book, 1);
      cart.add(gadget, 3);

      const itemsWithQty = cart.itemsWithQuantity;

      expect(itemsWithQty.length).toBe(2);
      expect(itemsWithQty[0].item).toEqual(book);
      expect(itemsWithQty[0].quantity).toBe(1);
      expect(itemsWithQty[1].item).toEqual(gadget);
      expect(itemsWithQty[1].quantity).toBe(3);
    });

    test('itemsWithQuantity should return copy', () => {
      const cart = new Cart();
      const gadget = new Gadget(1, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(gadget, 2);

      const items1 = cart.itemsWithQuantity;
      items1[0].increaseQuantity(10);

      const items2 = cart.itemsWithQuantity;

      expect(items2[0].quantity).toBe(2);
    });
  });

  describe('removeById with quantity', () => {
    test('should remove item regardless of quantity', () => {
      const cart = new Cart();
      const gadget = new Gadget(1, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(gadget, 5);
      cart.removeById(1);

      expect(cart.items.length).toBe(0);
    });
  });

  describe('Gadget with allowMultiple = false', () => {
    test('should not increase quantity if allowMultiple is false', () => {
      const cart = new Cart();
      const gadget = new Gadget(1, 'Special Item', 10000, 'Brand', 'Model', false);

      cart.add(gadget, 2);
      cart.add(gadget, 3);

      expect(cart.items.length).toBe(1);
      expect(cart.itemsWithQuantity[0].quantity).toBe(2);
    });
  });

  describe('Backward compatibility', () => {
    test('should still work with old add(item) signature', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);

      cart.add(book);

      expect(cart.items.length).toBe(1);
      expect(cart.getTotalPrice()).toBe(1000);
    });

    test('items getter should return Buyable items', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      const gadget = new Gadget(2, 'iPhone 15', 50000, 'Apple', 'iPhone 15 Pro');

      cart.add(book);
      cart.add(gadget, 2);

      const items = cart.items;

      expect(items.length).toBe(2);
      expect(items[0]).toEqual(book);
      expect(items[1]).toEqual(gadget);
    });
  });
});
