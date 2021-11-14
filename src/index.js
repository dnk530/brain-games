import readlineSync from 'readline-sync';

export default (rules, qaGenerator) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  let count = 0;

  while (count < 3) {
    const [question, answer] = qaGenerator();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}'' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    count += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
