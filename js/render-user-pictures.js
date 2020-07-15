'use strict';

(function () {

  var templatePicture = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  function renderUserPicture(picture) {
    var userPicture = templatePicture.cloneNode(true);
    var pictureImage = userPicture.querySelector('.picture__img');
    pictureImage.src = picture.url;
    var pictureLikes = userPicture.querySelector('.picture__likes');
    pictureLikes.textContent = picture.likes;
    var pictureComments = userPicture.querySelector('.picture__comments');
    pictureComments.textContent = picture.comments.length;
    userPicture.allData = picture;

    return userPicture;
  }

  window.renderUserPictures = function (data) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
      fragment.appendChild(renderUserPicture(data[i]));
    }
    window.dataProject.containerPictures.appendChild(fragment);
  };

})();
