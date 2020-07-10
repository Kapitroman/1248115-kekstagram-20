'use strict';

(function () {

  var NUMBER_PHOTOS = 25;
  var NUMBER_COMMENTS = 6;
  var LIST_DESCRIPTIONS = [
    'Великолепный таун-хауз в центре Токио. Подходит как туристам, так и бизнесменам. Дом полностью укомплектован и имеет свежий ремонт.',
    'Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.',
    'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
    'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
    'Маленькая квартирка на чердаке. Для самых не требовательных.',
    'У нас есть всё! Шприцы, интернет, кофе. Для всех кто знает толк в отдыхе. Полицию просим не беспокоить.',
    'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
    'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.',
    'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
    'Азиатов просьба не беспокоить.'
  ];
  var LIST_MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  var LIST_NAMES = [
    'Иван',
    'Михаил',
    'Даша',
    'Маша',
    'Павел',
    'Дмитрий'
  ];

  function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function getRandomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  function getRandomComment() {
    var comments = [];
    for (var i = 0; i < NUMBER_COMMENTS; i++) {
      comments.push({
        avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
        message: LIST_MESSAGES[getRandomIndex(LIST_MESSAGES)],
        name: LIST_NAMES[getRandomIndex(LIST_NAMES)],
      });
    }
    return comments;
  }

  window.dataServer = function getPhotos() {
    var photos = [];
    for (var i = 0; i < NUMBER_PHOTOS; i++) {
      photos.push({
        'url': 'photos/' + (i + 1) + '.jpg',
        'description': LIST_DESCRIPTIONS[getRandomIndex(LIST_DESCRIPTIONS)],
        'likes': getRandomInteger(15, 200),
        'comments': getRandomComment()
      });
    }
    return photos;
  };

})();
