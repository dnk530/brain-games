import runEngine from '../index.js';
import getRandomInt from '../common/random-int.js';

const rulesDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num1 === 0 || num2 === 0) { return num1 + num2; }
  if (num1 > num2) { return findGcd(num1 % num2, num2); }
  return findGcd(num2 % num1, num1);
};

const generateRound = () => {
  const firstInt = getRandomInt();
  const secondInt = getRandomInt();
  const question = `${firstInt} ${secondInt}`;
  const answer = String(findGcd(firstInt, secondInt));

  return [question, answer];
};

export default () => runEngine(rulesDescription, generateRound);
