import gameEngine from '../index.js';

export default () => {
  const rules = 'What is the result of the expression?';

  const generateRound = () => {
    const generateQuestion = () => {
      const getRandomInt = (min = 0, max = 99) => Math.floor(Math.random() * (max - min) + min);
      const getRandomOp = () => {
        const operators = ['+', '-', '*'];
        return operators[Math.floor(Math.random() * operators.length)];
      };
      return `${getRandomInt()} ${getRandomOp()} ${getRandomInt()}`;
    };

    const question = generateQuestion();

    const getAnswer = (exp) => {
      const [firstChunk, secondChunk, thirdChunk] = exp.split(' ');
      const firstOperand = parseInt(firstChunk, 10);
      const secondOperand = parseInt(thirdChunk, 10);

      switch (secondChunk) {
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

    const answer = getAnswer(question).toString();
    return [question, answer];
  };

  gameEngine(rules, generateRound);
};