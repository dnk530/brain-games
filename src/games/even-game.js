import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  function getRandomInt(min, max) {
    const minR = Math.ceil(min);
    const maxR = Math.floor(max);
    return Math.floor(Math.random() * (maxR - minR) + minR);
  }

  const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

  let count = 0;

  while (count < 3) {
    const randomInt = getRandomInt(0, 99);
    const correctAnswer = isEven(randomInt);

    console.log(`Question: ${randomInt}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}'' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    count += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
