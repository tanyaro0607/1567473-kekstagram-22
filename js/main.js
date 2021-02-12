//Функция для проверки допустимой длины строки

const getPossibleRowSize = (rowCheck, maxRowSize) => {
  if (rowCheck.length <= maxRowSize ) {
    return true;
  }
  return false;
}
alert(getPossibleRowSize('2',140));

//HW
/*
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArray = () => {
  let arr = [];
  for (let i=0; i < 25; i++) {
    let randomInteger = getRandomArray();
    if (arr.find(randomInteger)) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      arr.push(randomInteger);
    }
  }
}
*/

//получение массива элементов
/*const array = [],
  min = 1,
  max = 25;

for(let i = 1; i <= max; i++) array.push(i);
array.splice(arr.indexOf(Math.floor(Math.random() * (max + 1 - min) + min)),1);
array.sort(function() { return Math.random() - 0.5});
//console.log(arr);

//перебор по одному
for (let i = 0; i <= array.length - 1; i++) {
  array[i];
}*/

//исходные данные
const NAMES = [
  'Иван',
  'Алексей',
  'Семен',
  'Мария',
  'Ирина',
  'Валерий',
  'Леон',
  'Анастасия',
  'Милена',
  'Зоя',
  'Степан',
  'Виктор',
]

const COMMENTS = [
  'Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'На море.',
  'Летний день.',
  'Отличная погода была на прошлых выходных.',
  'Люблю жизнь!',
  'Чудеса природы.',
  'Моя семья',
  'Наш новый дом',
];

const POST_COUNT = 25; // всего элементов

// Получение случайного числа в диапозоне(включительно)
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//id, url, Avatar- сделать массив, чтоб числа были уникальны и брать число из него

//из лекции - получить рандомный элемент из массива - ошибка lodash при проверке
/*const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
}; */

//получить рандомный элемент из массива
const getRandomArrayElement = (elements) =>{
  return elements[getRandomInteger(0, elements.length - 1)];
};

// Функция генерируящая id фотографии, номер фото url, avatar
let getRandonValue = (minValue, maxValue, length) => {
  let randomValue = [];
  while(randomValue.length < length) {
    const random = getRandomInteger(minValue, maxValue);
    if (randomValue.indexOf(random) === -1) {
      randomValue.push(random);
    }
  }
  return randomValue;
}
getRandonValue();

//функция + описание
const createPost = () => {
  return {
    id: getRandonValue(1,25), // уникальный?
    url: 'photos/'+getRandonValue(1,25)+'.jpg', //уникальный?
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(15,200), //ок
    comments: [{
      id: getRandonValue(100,999), //уникальный?
      avatar: 'img/avatar-'+getRandonValue(1,6)+'.svg', //исправить на уникальный
      message: getRandomArrayElement(COMMENTS), //OK
      name: getRandomArrayElement(NAMES), //OK
    }],
  }
};

const similarPosts = new Array(POST_COUNT).fill(null).map(() => createPost());
similarPosts(); //console.log(similarPosts);
