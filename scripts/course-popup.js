const popupFzPhoto = document.querySelector('.popup_type_fz-photo');
const popupCloseBtn = popupFzPhoto.querySelector('.popup__close-button');
const popupPhoto = popupFzPhoto.querySelector('.popup__image');
const allFeedbackPhotos = document.querySelectorAll('.feedback__work-photo');
const page = document.querySelector('.page');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  page.classList.add('page_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  page.classList.remove('page_opened');
};

allFeedbackPhotos.forEach((photo) => {
  photo.addEventListener('click', () => {
    popupPhoto.src = photo.src;
    openPopup(popupFzPhoto);
  })
});

popupCloseBtn.addEventListener('click', () => {
  closePopup(popupFzPhoto);
});

popupFzPhoto.addEventListener('mousedown', (evt) => {
  closePopup(evt.target);
});
