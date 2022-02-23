import { request, print } from './cli.js';

export default (rulesDescription, generateRound) => {
  print('Welcome to the Brain Games!');
  const userName = request('May I have your name? ');
  print(`Hello, ${userName}!`);

  if (typeof rulesDescription === 'undefined') {
    return;
  }
  print(rulesDescription);

  const NUMBER_OF_ROUNDS = 3;
  let roundsPlayed = 0;

  while (roundsPlayed < NUMBER_OF_ROUNDS) {
    const [question, answer] = generateRound();
    print(`Question: ${question}`);
    const userAnswer = request('Your answer: ');
    if (userAnswer !== answer) {
      print(`'${userAnswer}'' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
    print('Correct!');
    roundsPlayed += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
