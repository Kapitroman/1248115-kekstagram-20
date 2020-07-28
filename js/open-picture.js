'use strict';

(function () {

  var bigPicture = document.querySelector('.big-picture');
  var bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
  var bigPictureImage = bigPicture.querySelector('.big-picture__img img');
  var likesCount = bigPicture.querySelector('.likes-count');
  var commentsCount = bigPicture.querySelector('.comments-count');
  var socialComments = bigPicture.querySelector('.social__comments');
  var socialComment = bigPicture.querySelectorAll('.social__comment')[0];
  var socialCaption = bigPicture.querySelector('.social__caption');
  var socialCommentCount = bigPicture.querySelector('.social__comment-count');
  var commentsLoader = bigPicture.querySelector('.comments-loader');
  var socialFooterButton = bigPicture.querySelector('.social__footer-btn');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  window.dataProject.containerPictures.addEventListener('click', function (evt) {
    var target = evt.target.closest('.picture');
    if (!target) {
      return;
    }
    bigPicture.classList.remove('hidden');
    bigPictureImage.src = target.allData.url;
    likesCount.textContent = target.allData.likes;
    commentsCount.textContent = target.allData.comments.length;
    socialCaption.textContent = target.allData.description;
    socialComments.innerHTML = '';

    var fragment = document.createDocumentFragment();
    target.allData.comments.forEach(function (item) {
      var itemComment = socialComment.cloneNode(true);
      var socialPicture = itemComment.querySelector('.social__picture');
      socialPicture.src = item.avatar;
      socialPicture.alt = item.name;
      var socialText = itemComment.querySelector('.social__text');
      socialText.textContent = item.message;
      fragment.appendChild(itemComment);
    });
    socialComments.appendChild(fragment);

    window.dataProject.body.classList.add('modal-open');

    bigPictureCancel.addEventListener('click', onButtonCancelClick);
    document.addEventListener('keydown', onButtonCancelPressEsc);
    socialFooterButton.focus();

  });

  function closePopUp() {
    bigPicture.classList.add('hidden');
    window.dataProject.body.classList.remove('modal-open');
    bigPictureCancel.removeEventListener('click', onButtonCancelClick);
    document.removeEventListener('keydown', onButtonCancelPressEsc);
  }

  function onButtonCancelClick() {
    closePopUp();
  }

  function onButtonCancelPressEsc(evt) {
    if (evt.key === 'Escape' && !bigPicture.classList.contains('hidden')) {
      evt.preventDefault();
      closePopUp();
    }
  }

})();
