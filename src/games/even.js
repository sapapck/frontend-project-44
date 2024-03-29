import getRandomData from '../utils.js';
import gameArchitecture from '../index.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestionAndAnswer = () => {
  const question = getRandomData(1, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const gameEven = () => gameArchitecture(description, getQuestionAndAnswer);

export default gameEven;
