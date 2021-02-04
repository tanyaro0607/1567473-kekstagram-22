// Получение случайного числа в диапозоне(включительно)
// Источник https://developer.mozilla.org/
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
alert(getRandomInteger(2,150));

//Функция для проверки допустимой длины строки

const getPossibleRowSize = (rowCheck, maxRowSize) => {
  if (rowCheck.length <= maxRowSize ) {
    return true;
  }
  return false;
}
alert(getPossibleRowSize(2,140));
