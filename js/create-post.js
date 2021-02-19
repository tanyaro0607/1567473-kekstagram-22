import {getRandomInteger} from './util.js';
import {getRandomArrayElement} from './random-array-element.js';
import {NAMES, COMMENTS, DESCRIPTION, MIN_NUMBER, MAX_NUMBER, MIN_NUMBER_LIKES, MAX_NUMBER_LIKES, MAX_NUMBER_AVATAR, MIN_COMMENTS_ID, MAX_COMMENTS_ID, POST_COUNT} from './data.js';
import {getRandomValue} from './random-value.js';

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

export {createPosts};
