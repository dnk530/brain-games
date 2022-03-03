import readlineSync from 'readline-sync';
import askName from './cli.js';

const numberOfRounds = 3;

export default (rulesDescription, generateRound) => {
  const userName = askName();
  console.log(rulesDescription);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}'' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
