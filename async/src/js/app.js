import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log('Game saving loaded successfully:', saving);
  } catch (error) {
    console.error('Error loading game saving:', error);
  }
})();
