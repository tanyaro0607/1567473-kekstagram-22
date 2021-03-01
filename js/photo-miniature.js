//по примеру Учебный проект: нас орда. Продолжение
import {createPosts} from './create-post.js';

createPosts();

const containerForPhotos = document.querySelector('.pictures'); //Контейнер для изображений от других пользователей
const similarListFragment = document.createDocumentFragment(); //cписок, в который мы будем вставлять фото пользователей
const similarPhotoTemplate = document.querySelector('#picture').content; // шаблон, который мы будем копировать

// для проверки копирования
//const photoElement = similarPhotoTemplate.cloneNode(true); //копируем с содержимым
//similarListElement.appendChild(photoElement); // вставляем в конец списка

const similarPhotos = createPosts();

similarPhotos.forEach(({url, likes, comments}) => {
  const photoElement = similarPhotoTemplate.cloneNode(true);  //копируем с содержимым
  photoElement.querySelector('.picture__img').src = url; //Адрес изображения url подставьте как src изображения
  photoElement.querySelector('.picture__likes').textContent = likes; //Количество лайков likes подставьте как текстовое содержание элемента .picture__likes
  photoElement.querySelector('.picture__comments').textContent = comments; //Количество комментариев comments подставьте как текстовое содержание элемента .picture__comments.
  similarListFragment.appendChild(photoElement); // фото вставляем в конец списка
});

containerForPhotos.appendChild(similarListFragment);

