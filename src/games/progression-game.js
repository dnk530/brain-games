import gameEngine from '../index.js';
import getRandomInt from '../common/random-int.js';

export default () => {
  const rulesDescription = 'What number is missing in the progression?';

  const generateRound = () => {
    const PROGRESSION_SIZE = 10;
    const [MIN_FIRST_ELEMENT_VALUE, MAX_FIRST_ELEMENT_VALUE] = [0, 10];
    const [MIN_INCREMENT, MAX_INCREMENT] = [1, 9];

    const generateProgression = () => {
      const firstElement = getRandomInt(MIN_FIRST_ELEMENT_VALUE, MAX_FIRST_ELEMENT_VALUE);
      const increment = getRandomInt(MIN_INCREMENT, MAX_INCREMENT);
      const progression = new Array(PROGRESSION_SIZE)
        .fill(firstElement)
        .reduce((acc, el, index) => (
          (index === 0) ? [el] : [...acc, acc[acc.length - 1] + increment]), []);
      return progression;
    };

    const progressionNumbers = generateProgression();
    const selectedIndex = getRandomInt(0, PROGRESSION_SIZE - 1);
    const PLACEHOLDER = '..';

    const question = progressionNumbers
      .map((el, index) => (index === selectedIndex ? PLACEHOLDER : el))
      .join(' ');

    const answer = progressionNumbers[selectedIndex].toString();

    return [question, answer];
  };

  gameEngine(rulesDescription, generateRound);
};
