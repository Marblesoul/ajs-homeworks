import Movie from '../domain/Movie';

describe('Movie', () => {
  test('should create movie with required fields', () => {
    const movie = new Movie(1, 'Inception', 500, 2010, 'USA', 'Sci-Fi', 148);

    expect(movie.id).toBe(1);
    expect(movie.name).toBe('Inception');
    expect(movie.price).toBe(500);
    expect(movie.year).toBe(2010);
    expect(movie.country).toBe('USA');
    expect(movie.genre).toBe('Sci-Fi');
    expect(movie.duration).toBe(148);
  });

  test('should create movie with all fields including optional', () => {
    const movie = new Movie(
      2,
      'The Avengers',
      600,
      2012,
      'USA',
      'Action',
      143,
      'Joss Whedon',
      ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    );

    expect(movie.id).toBe(2);
    expect(movie.name).toBe('The Avengers');
    expect(movie.price).toBe(600);
    expect(movie.year).toBe(2012);
    expect(movie.country).toBe('USA');
    expect(movie.genre).toBe('Action');
    expect(movie.duration).toBe(143);
    expect(movie.director).toBe('Joss Whedon');
    expect(movie.actors).toEqual(['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson']);
  });

  test('should implement Buyable interface', () => {
    const movie = new Movie(3, 'Interstellar', 550, 2014, 'USA', 'Sci-Fi', 169);

    expect(movie).toHaveProperty('id');
    expect(movie).toHaveProperty('name');
    expect(movie).toHaveProperty('price');
    expect(typeof movie.id).toBe('number');
    expect(typeof movie.name).toBe('string');
    expect(typeof movie.price).toBe('number');
  });
});
