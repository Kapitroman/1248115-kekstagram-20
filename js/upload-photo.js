'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var imageUploadInput = window.dataProject.containerPictures.querySelector('.img-upload__input');
  var imageUploadOverlay = window.dataProject.containerPictures.querySelector('.img-upload__overlay');
  var imageUploadPreview = window.dataProject.containerPictures.querySelector('.img-upload__preview img');
  var imageUploadCancel = window.dataProject.containerPictures.querySelector('.img-upload__cancel');

  function uploadPhoto(evt, image) {

    var file = evt.target.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (item) {
      return fileName.endsWith(item);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        image.src = reader.result;
      });

      reader.readAsDataURL(file);
    }

    imageUploadOverlay.classList.remove('hidden');
    window.dataProject.body.classList.add('modal-open');

    imageUploadCancel.addEventListener('click', onButtonCancelClick);
    document.addEventListener('keydown', onButtonCancelPressEsc);
  }

  imageUploadInput.addEventListener('change', function (evt) {
    uploadPhoto(evt, imageUploadPreview);
  });

  function onButtonCancelClick() {
    window.utils.closePopUp(imageUploadOverlay, imageUploadCancel, onButtonCancelClick, onButtonCancelPressEsc);

  }

  function onButtonCancelPressEsc(evt) {
    if (evt.key === 'Escape' && !imageUploadOverlay.classList.contains('hidden')) {
      evt.preventDefault();
      window.utils.closePopUp(imageUploadOverlay, imageUploadCancel, onButtonCancelClick, onButtonCancelPressEsc);
    }
  }

})();
