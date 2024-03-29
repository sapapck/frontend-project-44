import gameArchitecture from '../index.js';
import getRandomData from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) return false;
  const sqrtNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtNum; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRandomData(1, 100);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => gameArchitecture(rule, getQuestionAndAnswer);

export default primeGame;
