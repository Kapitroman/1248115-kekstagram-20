'use strict';

(function () {

  window.utils = {
    closePopUp: function (containerImage, buttonCancel, onButtonCancelClick, onButtonCancelPressEsc) {
      containerImage.classList.add('hidden');
      window.dataProject.body.classList.remove('modal-open');
      buttonCancel.removeEventListener('click', onButtonCancelClick);
      document.removeEventListener('keydown', onButtonCancelPressEsc);
    }
  };

})();
