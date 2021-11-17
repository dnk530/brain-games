import gameEngine from '../index.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const getRandomInt = (min = 0, max = 99) => Math.floor(Math.random() * (max - min) + min);
    const isEven = (int) => (int % 2 === 0);
    const question = getRandomInt();
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  };
  gameEngine(rules, generateRound);
};
