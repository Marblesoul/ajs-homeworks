import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';
import json from '../parser';

jest.mock('../reader');
jest.mock('../parser');

describe('GameSavingLoader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should load game saving successfully', async () => {
    const mockBuffer = new ArrayBuffer(2);
    const mockJsonString = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

    read.mockResolvedValue(mockBuffer);
    json.mockResolvedValue(mockJsonString);

    const saving = await GameSavingLoader.load();

    expect(read).toHaveBeenCalled();
    expect(json).toHaveBeenCalledWith(mockBuffer);
    expect(saving.id).toBe(9);
    expect(saving.created).toBe(1546300800);
    expect(saving.userInfo).toEqual({
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    });
  });

  test('should handle read error', async () => {
    const error = new Error('Failed to read file');
    read.mockRejectedValue(error);

    await expect(GameSavingLoader.load()).rejects.toThrow('Failed to read file');
    expect(read).toHaveBeenCalled();
  });

  test('should handle json parsing error', async () => {
    const mockBuffer = new ArrayBuffer(2);
    const error = new Error('Failed to parse JSON');

    read.mockResolvedValue(mockBuffer);
    json.mockRejectedValue(error);

    await expect(GameSavingLoader.load()).rejects.toThrow('Failed to parse JSON');
    expect(read).toHaveBeenCalled();
    expect(json).toHaveBeenCalledWith(mockBuffer);
  });

  test('should handle invalid JSON format', async () => {
    const mockBuffer = new ArrayBuffer(2);
    const mockJsonString = 'invalid json';

    read.mockResolvedValue(mockBuffer);
    json.mockResolvedValue(mockJsonString);

    await expect(GameSavingLoader.load()).rejects.toThrow();
    expect(read).toHaveBeenCalled();
    expect(json).toHaveBeenCalledWith(mockBuffer);
  });
});
