import gameEngine from '../index.js';
import getRandomInt from './common/random-int.js';

export default () => {
  const rules = 'What number is missing in the progression?';

  const generateRound = () => {
    const generateProgression = () => {
      const start = getRandomInt(0, 10);
      const difference = getRandomInt(1, 9);
      const LENGTH = 10;

      const progression = new Array(LENGTH)
        .fill(start)
        .reduce((acc, el, index) => (
          (index === 0) ? [el] : [...acc, acc[acc.length - 1] + difference]), []);
      return progression;
    };

    const progressionArray = generateProgression();
    const selectedIndex = getRandomInt(0, 9);

    const question = progressionArray
      .map((el, ind) => (ind === selectedIndex ? '..' : el))
      .join(' ');

    const answer = progressionArray[selectedIndex].toString();

    return [question, answer];
  };

  gameEngine(rules, generateRound);
};
