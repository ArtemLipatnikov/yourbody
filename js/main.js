$(function () {

  $('.slider__items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slider__arrow-left'),
    nextArrow: $('.slider__arrow-right'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('input[type="file"]').styler({
    filePlaceholder: 'фото',
    fileBrowse: ''
  });

  $('a[href^="#"]').click(function () {
    let anchor = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(anchor).offset().top
    }, 1000);
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });

});