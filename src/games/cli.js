import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello ${userName}!`);
};
export default greeting;
