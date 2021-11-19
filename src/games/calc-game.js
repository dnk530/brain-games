import gameEngine from '../index.js';
import getRandomInt from './common/random-int.js';

export default () => {
  const rules = 'What is the result of the expression?';

  const generateRound = () => {
    const firstOperand = getRandomInt();
    const secondOperand = getRandomInt();

    const getRandomOp = () => {
      const operators = ['+', '-', '*'];
      return operators[Math.floor(Math.random() * operators.length)];
    };
    const operator = getRandomOp();

    const question = `${firstOperand} ${operator} ${secondOperand}`;

    const getAnswer = () => {
      switch (operator) {
        case '+':
          return firstOperand + secondOperand;
        case '-':
          return firstOperand - secondOperand;
        case '*':
          return firstOperand * secondOperand;
        default:
          return 'unknown operator';
      }
    };

    const answer = getAnswer().toString();
    return [question, answer];
  };

  gameEngine(rules, generateRound);
};
