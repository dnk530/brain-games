import gameEngine from '../index.js';
import getRandomInt from '../common/random-int.js';

const operators = ['+', '-', '*'];
const rulesDescription = 'What is the result of the expression?';

const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error('unknown operator');
  }
};

export default () => {
  const generateRound = () => {
    const firstOperand = getRandomInt();
    const secondOperand = getRandomInt();
    const operator = operators[getRandomInt(0, operators.length - 1)];

    const question = `${firstOperand} ${operator} ${secondOperand}`;
    const answer = calculate(firstOperand, secondOperand, operator).toString();

    return [question, answer];
  };

  gameEngine(rulesDescription, generateRound);
};
