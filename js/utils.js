'use strict';

(function () {

  window.utils = {
    closePopUp: function (containerImage, buttonCancel, onButtonCancelClick, onButtonCancelPressEsc) {
      if (containerImage === window.dataProject.imageUploadOverlay) {
        window.dataProject.imageUploadInput.value = '';
      }
      containerImage.classList.add('hidden');
      window.dataProject.body.classList.remove('modal-open');
      buttonCancel.removeEventListener('click', onButtonCancelClick);
      document.removeEventListener('keydown', onButtonCancelPressEsc);
    }
  };

})();
