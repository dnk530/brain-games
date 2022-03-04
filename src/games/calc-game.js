import runEngine from '../index.js';
import getRandomInt from '../common/random-int.js';

const rulesDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

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
    const randomOperator = operators[getRandomInt(0, operators.length - 1)];

    const question = `${firstOperand} ${randomOperator} ${secondOperand}`;
    const answer = calculate(firstOperand, secondOperand, randomOperator).toString();

    return [question, answer];
  };

  runEngine(rulesDescription, generateRound);
};
