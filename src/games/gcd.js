import gameArchitecture from '../index.js';
import getRandomData from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b && b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomData(1, 50);
  const num2 = getRandomData(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = `${getGcd(num1, num2)}`;
  return [question, correctAnswer];
};

const gameGcd = () => gameArchitecture(rules, getQuestionAndAnswer);
export default gameGcd;
