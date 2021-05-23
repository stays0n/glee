$(function() {
  const formInput = document.querySelector('.form__input'),
    formGroup = document.querySelector('.form__group');
  formInput.addEventListener('focus', () => {
    formGroup.classList.add('active');
  })
  formInput.addEventListener('blur', () => {
    if (formInput.value == '') {
      formGroup.classList.remove('active');
    }
  })

  $('.banner__slider').slick({
    arrows: false,
    dots: true,
  });

  $('.partners__slider').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  });


  let containerEl1 = document.querySelector('[data-ref="container-1"]');
  let containerEl2 = document.querySelector('[data-ref="container-2"]');
  let config = {
    controls: {
      scope: 'local'
    }
  };
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});