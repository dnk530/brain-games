import gameEngine from '../index.js';

export default () => {
  const rules = 'What is the result of the expression?';

  const qaGenerator = () => {
    const generateExpression = () => {
      const getRandomInt = (min = 0, max = 99) => {
        const minR = Math.ceil(min);
        const maxR = Math.floor(max);
        return Math.floor(Math.random() * (maxR - minR) + minR);
      };
      const getRandomOp = () => {
        const operators = ['+', '-', '*'];
        return operators[Math.floor(Math.random() * operators.length)];
      };
      return `${getRandomInt()} ${getRandomOp()} ${getRandomInt()}`;
    };

    const question = generateExpression();

    const solveExpression = (exp) => {
      const [firstOperand, operator, secondOperand] = exp.split(' ');
      switch (operator) {
        case '+':
          return (parseInt(firstOperand, 10) + parseInt(secondOperand, 10));
        case '-':
          return (parseInt(firstOperand, 10) - parseInt(secondOperand, 10));
        case '*':
          return (parseInt(firstOperand, 10) * parseInt(secondOperand, 10));
        default:
          return 'unknown operator';
      }
    };

    const answer = solveExpression(question).toString();
    return [question, answer];
  };

  gameEngine(rules, qaGenerator);
};
