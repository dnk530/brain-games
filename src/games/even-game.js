import gameEngine from '../index.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const qaGenerator = () => {
    function getRandomInt(min, max) {
      const minR = Math.ceil(min);
      const maxR = Math.floor(max);
      return Math.floor(Math.random() * (maxR - minR) + minR);
    }

    const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
    const question = getRandomInt(0, 99);
    const answer = isEven(question);
    return [question, answer];
  };
  gameEngine(rules, qaGenerator);
};
