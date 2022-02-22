import gameEngine from '../index.js';
import getRandomInt from './common/random-int.js';

export default () => {
  const rulesDescription = 'Find the greatest common divisor of given numbers.';

  const generateRound = () => {
    const firstInt = getRandomInt();
    const secondInt = getRandomInt();

    const question = `${firstInt} ${secondInt}`;

    const findGcd = (num1, num2) => {
      if (num1 === 0 || num2 === 0) { return num1 + num2; }
      if (num1 > num2) { return findGcd(num1 % num2, num2); }
      return findGcd(num2 % num1, num1);
    };

    const answer = findGcd(firstInt, secondInt).toString();

    return [question, answer];
  };

  gameEngine(rulesDescription, generateRound);
};
