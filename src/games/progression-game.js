import gameEngine from '../index.js';

export default () => {
  const rules = 'What number is missing in the progression?';

  const generateRound = () => {
    const getRandomInt = (min = 0, max = 99) => Math.floor(Math.random() * (max - min) + min);
    const generateProgression = () => {
      const start = getRandomInt(0, 10);
      const difference = getRandomInt(1, 9);
      const LENGTH = 10;

      const progression = [start];
      for (let i = 1; i < LENGTH; i += 1) {
        progression.push(progression[i - 1] + difference);
      }
      return progression;
    };

    const progressionArray = generateProgression();
    const selectedIndex = getRandomInt(0, 9);
    const answer = progressionArray[selectedIndex].toString();

    const generateQuestion = (index) => {
      const copyProgression = [...progressionArray];
      copyProgression[index] = '..';
      return copyProgression.join(' ');
    };
    const question = generateQuestion(selectedIndex);

    return [question, answer];
  };

  gameEngine(rules, generateRound);
};
