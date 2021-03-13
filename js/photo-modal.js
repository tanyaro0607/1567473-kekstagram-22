import {similarPhotos} from './photo-miniature.js';

const containerForPhotos = document.querySelector('.pictures');

containerForPhotos.addEventListener ('click', (evt)=> {
  addDataModalPhoto(evt);
  openPhotoModal();
})

let userModalPhotoCancel = document.querySelector('.big-picture__cancel');
userModalPhotoCancel.addEventListener ('click', ()=> {
  closePhotoModal();
})

containerForPhotos.addEventListener ('keydown', (evt)=> {
  if (isEscEvent(evt)) {
    closePhotoModal();
  }
})

//доб данные в модальное окно
const addDataModalPhoto =(evt) => {
  const choicePhoto= evt.target.parentNode;
  const idPhoto = choicePhoto.dataset.id;
  const userModalPhoto = document.querySelector('.big-picture');
  let dataPhoto;
  for (let i=0; i<similarPhotos.length; i++) {
    const dataObject = similarPhotos[i];
    if (dataObject.id == idPhoto) {
      dataPhoto = Object.assign({}, dataObject);
    }
  }
  userModalPhoto.querySelector('.big-picture__img img').setAttribute('src', dataPhoto.url);
  userModalPhoto.querySelector('.likes-count').textContent = dataPhoto.likes;
  userModalPhoto.querySelector('.comments-count').textContent = dataPhoto.comments.length;
  userModalPhoto.querySelector('.social__comment img').setAttribute('src', dataPhoto.comments[0].avatar);
  userModalPhoto.querySelector('.social__comment p').textContent = dataPhoto.comments[0].message;
  userModalPhoto.querySelector('.social__comment img').setAttribute('alt', dataPhoto.comments[0].name);
  userModalPhoto.querySelector('.social__caption').textContent = dataPhoto.description;
}

const openPhotoModal = () => {
  const body = document.querySelector('body');
  const countComment = document.querySelector('.social__comment-count');
  const loaderComment = document.querySelector('.comments-loader');
  const userModalPhoto = document.querySelector('.big-picture');
  userModalPhoto.classList.remove('hidden');
  countComment.classList.add('hidden');
  loaderComment.classList.add('hidden');
  body.classList.add('modal-open');
}

const closePhotoModal = () => {
  const userModalPhoto = document.querySelector('.big-picture');
  const body = document.querySelector('body');
  userModalPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
}

//Закрытие окна клавишей Esc
const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

