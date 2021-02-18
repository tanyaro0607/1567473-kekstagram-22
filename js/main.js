//Функция для проверки допустимой длины строки
const getPossibleRowSize = (rowCheck, maxRowSize) => {
  if (rowCheck.length <= maxRowSize ) {
    return true;
  }
  return false;
}
alert(getPossibleRowSize('2',140));

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

const MIN_NUMBER = 1; //id,url,avatar
const MAX_NUMBER = 25; //id,url
const MIN_NUMBER_LIKES = 15;
const MAX_NUMBER_LIKES = 200;
const MAX_NUMBER_AVATAR = 6;
const MIN_COMMENTS_ID = 100;
const MAX_COMMENTS_ID = 999;
const POST_COUNT = 25; // всего элементов

// Получение случайного числа в диапозоне(включительно)
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Получение рандомного элемента из массива для COMMENTS, NAMES, DESCRIPTION
const getRandomArrayElement = (elements) =>{
  return elements[getRandomInteger(0, elements.length - 1)];
};

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

//конечная функция + описание
const createPost = (randomNumber, randomNumberCommentsId) => {
  return {
    id: randomNumber,
    url: 'photos/'+randomNumber+'.jpg',
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(MIN_NUMBER_LIKES, MAX_NUMBER_LIKES),
    comments: [{
      id: randomNumberCommentsId,
      avatar: 'img/avatar-'+getRandomInteger(1, MAX_NUMBER_AVATAR)+'.svg',
      message: getRandomArrayElement(COMMENTS),
      name: getRandomArrayElement(NAMES),
    }],
  }
};

const createPosts = () => {
  let postArray = [];
  const randomArray = getRandomValue(MIN_NUMBER, MAX_NUMBER, POST_COUNT); //массив чисел от 1 до 25
  const randomArrayCommentsId = getRandomValue(MIN_COMMENTS_ID, MAX_COMMENTS_ID, POST_COUNT); //массив чисел от 100 до 999
  for (let i=0; i < POST_COUNT; i++) {
    postArray.push(createPost(randomArray[i], randomArrayCommentsId[i]));
  }
  return postArray;
}

createPosts();
