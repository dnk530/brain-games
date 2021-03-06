import runEngine from '../index.js';
import getRandomInt from '../common/random-int.js';

const rulesDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (int) => (int % 2 === 0);

const generateRound = () => {
  const question = getRandomInt();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => runEngine(rulesDescription, generateRound);
