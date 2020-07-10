'use strict';

(function () {

  var containerPictures = document.querySelector('.pictures');

  window.main = {
    containerPictures: containerPictures
  };

  var data = window.dataServer();

  window.renderUserPictures(data);

})();
