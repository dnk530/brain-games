import gameEngine from '../index.js';
import getRandomInt from '../common/random-int.js';

const randomNumberLimit = 3500;

export default () => {
  const rulesDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRound = () => {
    const question = getRandomInt(1, randomNumberLimit);

    const isPrime = (num) => {
      const limit = Math.floor(Math.sqrt(num));
      for (let i = 2; i <= limit; i += 1) {
        if (num % i === 0) { return false; }
      }
      return num > 1;
    };

    const answer = isPrime(question) ? 'yes' : 'no';

    return [question, answer];
  };

  gameEngine(rulesDescription, generateRound);
};
