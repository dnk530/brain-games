import runEngine from '../index.js';
import getRandomInt from '../common/random-int.js';

const rulesDescription = 'What number is missing in the progression?';

const generateProgression = (firstElement, increment, size) => {
  const progression = [firstElement];
  for (let i = 1; i < size; i += 1) {
    progression.push(firstElement + increment * i);
  }
  return progression;
};

const generateRound = () => {
  const progressionSize = getRandomInt(5, 10);
  const firstElement = getRandomInt(0, 25);
  const increment = getRandomInt(1, 9);

  const progressionNumbers = generateProgression(firstElement, increment, progressionSize);
  const selectedIndex = getRandomInt(0, progressionSize - 1);

  const question = progressionNumbers
    .map((el, index) => (index === selectedIndex ? '..' : el))
    .join(' ');

  const answer = String(progressionNumbers[selectedIndex]);

  return [question, answer];
};

export default () => runEngine(rulesDescription, generateRound);
