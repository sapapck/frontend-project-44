import gameArchitecture from '../index.js';
import getRandomData from '../utils.js';

const rule = 'What number is missing in the progression?';
const progressionLength = getRandomData(5, 10);

const getProgression = (startNum, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const startNum = getRandomData(1, 10);
  const step = getRandomData(1, 10);

  const progression = getProgression(startNum, step);
  const missedNumber = getRandomData(1, progression.length - 1);

  const correctAnswear = `${progression[missedNumber]}`;
  progression[missedNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswear];
};

const gameProgression = () => gameArchitecture(rule, getQuestionAndAnswer);
export default gameProgression;
