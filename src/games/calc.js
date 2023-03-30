import gameArchitecture from '../index.js';

const getRandomData = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const arithOperations = ['+', '-', '*'];
const rules = 'What is the result of the expression?';

const mathExpressions = (data1, operator, data2) => {
  switch (operator) {
    case '+':
      return data1 + data2;
    case '-':
      return data1 - data2;
    case '*':
      return data1 * data2;
    default:
      return null;
  }
};

const randomNum = () => {
  const data1 = getRandomData(1, 15);
  const data2 = getRandomData(1, 15);
  const randomOperator = arithOperations[getRandomData(0, arithOperations.length - 1)];
  const Question = `${data1} ${randomOperator} ${data2}`;
  const correctAnswer = `${mathExpressions(data1, randomOperator, data2)}`;
  return [Question, correctAnswer];
};

const gameCalc = () => gameArchitecture(rules, randomNum);

export default gameCalc;
