import gameEngine from '../index.js';
import getRandomInt from './common/random-int.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const generateRound = () => {
    const firstInt = getRandomInt();
    const secondInt = getRandomInt();

    const question = `${firstInt} ${secondInt}`;

    const findGcd = (a, b) => {
      if (a === 0 || b === 0) return a + b;
      if (a > b) return findGcd(a % b, b);
      return findGcd(b % a, a);
    };

    const answer = findGcd(firstInt, secondInt).toString();

    return [question, answer];
  };

  gameEngine(rules, generateRound);
};
