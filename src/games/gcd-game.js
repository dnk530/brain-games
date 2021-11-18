import gameEngine from '../index.js';
import getRandomInt from './random-int.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const generateRound = () => {
    const question = `${getRandomInt()} ${getRandomInt()}`;

    const getAnswer = (str) => {
      const [firstChunk, secondChunk] = str.split(' ');
      const firstInt = parseInt(firstChunk, 10);
      const secondInt = parseInt(secondChunk, 10);

      const findGcd = (a, b) => {
        if (a === 0 || b === 0) return a + b;
        if (a > b) return findGcd(a % b, b);
        return findGcd(b % a, a);
      };
      return (findGcd(firstInt, secondInt));
    };
    const answer = getAnswer(question).toString();
    return [question, answer];
  };

  gameEngine(rules, generateRound);
};
