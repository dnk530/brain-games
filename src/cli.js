import readlineSync from 'readline-sync';

export const request = (prompt) => readlineSync.question(prompt);
export const print = (data) => console.log(data);
