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

export {NAMES, COMMENTS, DESCRIPTION, MIN_NUMBER, MAX_NUMBER, MIN_NUMBER_LIKES, MAX_NUMBER_LIKES, MAX_NUMBER_AVATAR, MIN_COMMENTS_ID, MAX_COMMENTS_ID, POST_COUNT};
