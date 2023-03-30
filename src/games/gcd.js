import { gameArchitecture, getRandomData } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (a, b) => {
  if (!b && b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
};

const randomNum = () => {
  const num1 = getRandomData(1, 50);
  const num2 = getRandomData(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = `${greatestCommonDivisor(num1, num2)}`;
  return [question, correctAnswer];
};

const gameGcd = () => gameArchitecture(rules, randomNum);
export default gameGcd;
