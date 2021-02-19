import {getRandomInteger} from './util.js';

// Функция генерируящая массив неповторяющихся числе для id, url, avatar
const getRandomValue = (minValue, maxValue, length) => {
  const randomValue = [];
  while(randomValue.length < length) {
    const random = getRandomInteger(minValue, maxValue);
    if (randomValue.indexOf(random) === -1) {
      randomValue.push(random);
    }
  }
  return randomValue;
}

export {getRandomValue};
