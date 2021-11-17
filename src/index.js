import readlineSync from 'readline-sync';
import cli from './cli.js';

export default (rules, generateRound) => {
  const userName = cli();

  console.log(rules);

  let roundsPlayed = 0;
  const NUMBER_OF_ROUNDS = 3;

  while (roundsPlayed < NUMBER_OF_ROUNDS) {
    const [question, answer] = generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}'' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    roundsPlayed += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
