import gameEngine from '../index.js';
import getRandomInt from './common/random-int.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRound = () => {
    const UPPER_LIMIT = 3500;
    const question = getRandomInt(1, UPPER_LIMIT);

    const isPrime = (num) => {
      const limit = Math.floor(Math.sqrt(num));
      for (let i = 2; i <= limit; i += 1) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };

    const answer = isPrime(question) ? 'yes' : 'no';

    return [question, answer];
  };

  gameEngine(rules, generateRound);
};
