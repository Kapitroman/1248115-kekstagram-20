'use strict';

(function () {

  var containerPictures = document.querySelector('.pictures');

  window.main = {
    containerPictures: containerPictures
  };

  var data = window.dataServer();

  window.renderUserPictures(data);

  var bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');
  var bigPictureImage = bigPicture.querySelector('.big-picture__img img');
  bigPictureImage.src = data[0].url;
  var likesCount = bigPicture.querySelector('.likes-count');
  likesCount.textContent = data[0].likes;
  var commentsCount = bigPicture.querySelector('.comments-count');
  commentsCount.textContent = data[0].comments.length;
  var socialComments = bigPicture.querySelector('.social__comments');
  var socialComment = bigPicture.querySelectorAll('.social__comment')[0];
  var fragment = document.createDocumentFragment();
  data[0].comments.forEach(function(item) {
    var itemComment = socialComment.cloneNode(true);
    var socialPicture = itemComment.querySelector('.social__picture');
    socialPicture.src = item.avatar;
    socialPicture.alt = item.name;
    var socialText = itemComment.querySelector('.social__text');
    socialText.textContent = item.message;
    fragment.appendChild(itemComment);
  });
  socialComments.insertBefore(fragment, socialComment);
  socialComments.removeChild(socialComments.lastElementChild);
  socialComments.removeChild(socialComments.lastElementChild);
  var socialCaption = bigPicture.querySelector('.social__caption');
  socialCaption.textContent = data[0].description;

  var socialCommentCount = bigPicture.querySelector('.social__comment-count');
  socialCommentCount.classList.add('hidden');
  var commentsLoader = bigPicture.querySelector('.comments-loader');
  commentsLoader.classList.add('hidden');

  var body = document.querySelector('body');
  body.classList.add('modal-open');

})();
