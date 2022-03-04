import runEngine from '../index.js';
import getRandomInt from '../common/random-int.js';

const rulesDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const limit = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) { return false; }
  }
  return num > 1;
};

export default () => {
  const generateRound = () => {
    const question = getRandomInt(1, 3500);
    const answer = isPrime(question) ? 'yes' : 'no';

    return [question, answer];
  };

  runEngine(rulesDescription, generateRound);
};
