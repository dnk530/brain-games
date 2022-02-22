import gameEngine from '../index.js';
import getRandomInt from './common/random-int.js';

export default () => {
  const rulesDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const isEven = (int) => (int % 2 === 0);
    const question = getRandomInt();
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  };
  gameEngine(rulesDescription, generateRound);
};
