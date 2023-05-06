import gameArchitecture from '../index.js';
import getRandomData from '../utils.js';

const rule = 'What number is missing in the progression?';

const createProgression = () => {
  const progressionLength = getRandomData(5, 10);
  const step = getRandomData(1, 10);

  const progression = [getRandomData(1, 20)];
  while (progression.length < progressionLength) {
    const lastIndex = progression.length - 1;
    progression.push(progression[lastIndex] + step);
  }
  const missedNumber = getRandomData(1, progression.length - 1);
  const correctAnswear = `${progression[missedNumber]}`;
  progression[missedNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswear];
};

const gameProgression = () => gameArchitecture(rule, createProgression);
export default gameProgression;
