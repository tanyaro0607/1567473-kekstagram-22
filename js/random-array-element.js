import {getRandomInteger} from './util.js';

//Получение рандомного элемента из массива для COMMENTS, NAMES, DESCRIPTION
const getRandomArrayElement = (elements) =>{
  return elements[getRandomInteger(0, elements.length - 1)];
};

export {getRandomArrayElement};
