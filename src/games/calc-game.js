import gameEngine from '../index.js';
import getRandomInt from '../common/random-int.js';

export default () => {
  const rulesDescription = 'What is the result of the expression?';

  const generateRound = () => {
    const firstOperand = getRandomInt();
    const secondOperand = getRandomInt();

    const getRandomOperator = () => {
      const operators = ['+', '-', '*'];
      return operators[Math.floor(Math.random() * operators.length)];
    };
    const operator = getRandomOperator();

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

  gameEngine(rulesDescription, generateRound);
};
