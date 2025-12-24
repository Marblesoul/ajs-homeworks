import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

describe('Cart', () => {
  describe('Basic operations', () => {
    test('new cart should be empty', () => {
      const cart = new Cart();

      expect(cart.items.length).toBe(0);
    });

    test('should add item to cart', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);

      cart.add(book);

      expect(cart.items.length).toBe(1);
      expect(cart.items[0]).toEqual(book);
    });

    test('should add multiple items to cart', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      const album = new MusicAlbum(2, 'Dark Side of the Moon', 'Pink Floyd', 800);
      const movie = new Movie(3, 'Inception', 500, 2010, 'USA', 'Sci-Fi', 148);

      cart.add(book);
      cart.add(album);
      cart.add(movie);

      expect(cart.items.length).toBe(3);
      expect(cart.items).toEqual([book, album, movie]);
    });

    test('items should return copy of array', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      cart.add(book);

      const items = cart.items;
      items.push(new Book(2, 'Another Book', 'Author', 500, 200));

      expect(cart.items.length).toBe(1);
    });
  });

  describe('getTotalPrice', () => {
    test('empty cart total should be 0', () => {
      const cart = new Cart();

      expect(cart.getTotalPrice()).toBe(0);
    });

    test('should calculate total price for single item', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      cart.add(book);

      expect(cart.getTotalPrice()).toBe(1000);
    });

    test('should calculate total price for multiple items', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      const album = new MusicAlbum(2, 'Dark Side of the Moon', 'Pink Floyd', 800);
      const movie = new Movie(3, 'Inception', 500, 2010, 'USA', 'Sci-Fi', 148);

      cart.add(book);
      cart.add(album);
      cart.add(movie);

      expect(cart.getTotalPrice()).toBe(2300);
    });
  });

  describe('getTotalPriceWithDiscount', () => {
    test('0% discount should equal full price', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      cart.add(book);

      expect(cart.getTotalPriceWithDiscount(0)).toBe(1000);
    });

    test('should calculate 50% discount correctly', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      cart.add(book);

      expect(cart.getTotalPriceWithDiscount(50)).toBe(500);
    });

    test('100% discount should equal 0', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      cart.add(book);

      expect(cart.getTotalPriceWithDiscount(100)).toBe(0);
    });

    test('discount on empty cart should be 0', () => {
      const cart = new Cart();

      expect(cart.getTotalPriceWithDiscount(50)).toBe(0);
    });

    test('should calculate discount for multiple items', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      const album = new MusicAlbum(2, 'Dark Side of the Moon', 'Pink Floyd', 800);

      cart.add(book);
      cart.add(album);

      expect(cart.getTotalPriceWithDiscount(10)).toBe(1620);
    });
  });

  describe('removeById', () => {
    test('should remove existing item from cart', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      const album = new MusicAlbum(2, 'Dark Side of the Moon', 'Pink Floyd', 800);

      cart.add(book);
      cart.add(album);
      cart.removeById(1);

      expect(cart.items.length).toBe(1);
      expect(cart.items[0]).toEqual(album);
    });

    test('removing non-existing item should do nothing', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);

      cart.add(book);
      cart.removeById(999);

      expect(cart.items.length).toBe(1);
      expect(cart.items[0]).toEqual(book);
    });

    test('removing from empty cart should do nothing', () => {
      const cart = new Cart();

      cart.removeById(1);

      expect(cart.items.length).toBe(0);
    });

    test('should remove all items with same id', () => {
      const cart = new Cart();
      const book1 = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      const book2 = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      const album = new MusicAlbum(2, 'Dark Side of the Moon', 'Pink Floyd', 800);

      cart.add(book1);
      cart.add(book2);
      cart.add(album);
      cart.removeById(1);

      expect(cart.items.length).toBe(1);
      expect(cart.items[0]).toEqual(album);
    });

    test('remaining items should be correct after removal', () => {
      const cart = new Cart();
      const book = new Book(1, 'Clean Code', 'Robert Martin', 1000, 464);
      const album = new MusicAlbum(2, 'Dark Side of the Moon', 'Pink Floyd', 800);
      const movie = new Movie(3, 'Inception', 500, 2010, 'USA', 'Sci-Fi', 148);

      cart.add(book);
      cart.add(album);
      cart.add(movie);
      cart.removeById(2);

      expect(cart.items.length).toBe(2);
      expect(cart.items).toEqual([book, movie]);
      expect(cart.getTotalPrice()).toBe(1500);
    });
  });
});
