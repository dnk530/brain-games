import gameEngine from '../index.js';
import getRandomInt from '../common/random-int.js';

const placeholder = '..';
const progressionSize = 10;
const firstElementRange = [0, 10];
const incrementRange = [1, 9];

export default () => {
  const rulesDescription = 'What number is missing in the progression?';

  const generateRound = () => {
    const generateProgression = () => {
      const firstElement = getRandomInt(...firstElementRange);
      const increment = getRandomInt(...incrementRange);
      const progression = new Array(progressionSize)
        .fill(firstElement)
        .reduce((acc, el, index) => (
          (index === 0) ? [el] : [...acc, acc[acc.length - 1] + increment]), []);
      return progression;
    };

    const progressionNumbers = generateProgression();
    const selectedIndex = getRandomInt(0, progressionSize - 1);

    const question = progressionNumbers
      .map((el, index) => (index === selectedIndex ? placeholder : el))
      .join(' ');

    const answer = progressionNumbers[selectedIndex].toString();

    return [question, answer];
  };

  gameEngine(rulesDescription, generateRound);
};
