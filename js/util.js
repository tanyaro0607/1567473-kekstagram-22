//Функция для проверки допустимой длины строки
const getPossibleRowSize = (rowCheck, maxRowSize) => {
  if (rowCheck.length <= maxRowSize ) {
    return true;
  }
  return false;
}
alert(getPossibleRowSize('2',140));

// Получение случайного числа в диапозоне(включительно)
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {getRandomInteger};
