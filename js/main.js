'use strict';

(function () {

  var serverData = [];
  var uploadMessage;
  var main = document.querySelector('main');

  var templateError = document.querySelector('#error')
    .content
    .querySelector('.error');

  function onSuccess(data) {
    serverData = data;
    window.renderUserPictures(serverData);
  }

  function onMessagePressEsc(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      if (uploadMessage) {
        closeMessage(uploadMessage);
      }
    }
  }

  function closeMessage(popUpMessage) {
    main.removeChild(popUpMessage);
    document.removeEventListener('keydown', onMessagePressEsc);
    uploadMessage = undefined;
  }

  function onError(errorMessage) {
    uploadMessage = templateError.cloneNode(true);
    var errorTitle = uploadMessage.querySelector('.error__title');
    var errorButton = uploadMessage.querySelector('.error__button');
    errorTitle.textContent = errorMessage;
    errorButton.textContent = 'Попробуйте загрузить еще раз';
    main.appendChild(uploadMessage);
    document.addEventListener('keydown', onMessagePressEsc);
  }

  window.sendRequest(null, onSuccess, onError);

})();
