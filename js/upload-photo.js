'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var imageUploadForm = window.dataProject.containerPictures.querySelector('.img-upload__form');
  var imageUploadInput = imageUploadForm.querySelector('.img-upload__input');
  var imageUploadOverlay = imageUploadForm.querySelector('.img-upload__overlay');
  var imageUploadPreview = imageUploadForm.querySelector('.img-upload__preview img');
  var imageUploadCancel = imageUploadForm.querySelector('.img-upload__cancel');

  var textHashtags = imageUploadForm.querySelector('.text__hashtags');
  var textDescription = imageUploadForm.querySelector('.text__description');

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

  function closePopUp() {
    imageUploadInput.value = '';
    imageUploadOverlay.classList.add('hidden');
    window.dataProject.body.classList.remove('modal-open');
    imageUploadCancel.removeEventListener('click', onButtonCancelClick);
    document.removeEventListener('keydown', onButtonCancelPressEsc);
  }

  function onButtonCancelClick() {
    closePopUp();

  }

  function onButtonCancelPressEsc(evt) {
    if (evt.key === 'Escape' && !imageUploadOverlay.classList.contains('hidden')) {
      if (textHashtags.matches(':focus') || textDescription.matches(':focus')) {
        return;
      } else {
        evt.preventDefault();
        closePopUp();
      }
    }
  }

  function onInputHashtagsChange() {
    textHashtags.setCustomValidity('');
    var stringHashtags = textHashtags.value.toLowerCase();
    if (!stringHashtags) {
      return;
    }
    var arrayHashtags = stringHashtags.split(' ');
    if (arrayHashtags.length > 5) {
      textHashtags.setCustomValidity('количество хештегов не должно быть больше пяти');
    }
    for (var i = 0; i < arrayHashtags.length; i++) {
      if (arrayHashtags.slice(i + 1).includes(arrayHashtags[i])) {
        textHashtags.setCustomValidity('хештеги не должны повторяться');
        break;
      }
      if (arrayHashtags[i].length > 20) {
        textHashtags.setCustomValidity('длина хештега не может быть больше 20 символов');
        break;
      }
      if (!arrayHashtags[i].match(/^(#)([0-9a-zа-я])+$/)) {
        textHashtags.setCustomValidity('недопустимое выражение для хештега');
        break;
      }
    }
  }

  function onTextareaChange() {
    if (textDescription.value.length > 140) {
      textDescription.setCustomValidity('длина комментария не может составлять больше 140 символов');
    } else {
      textDescription.setCustomValidity('');
    }
  }

  textHashtags.addEventListener('change', onInputHashtagsChange);
  textDescription.addEventListener('change', onTextareaChange);

})();
