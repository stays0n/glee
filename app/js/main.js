$(function () {

  const headerMenu = document.querySelector('.header__menu'),
    headerTools = document.querySelector('.header__tools'),
    header = document.querySelector('.header')

  const bodyTag = document.body;
  toggleOverflowHiddenToBoddy = () => {
    bodyTag.classList.contains('body-hidden') === true ? bodyTag.classList.remove('body-hidden') : bodyTag.classList.add('body-hidden')
  }

  function togglePaddindOnToolsFixed() {
    if (window.innerWidth < 569 && window.pageYOffset > 54) {
      header.style.paddingBottom = 85 + 'px'
      toggleTools()

    } else if (window.innerWidth > 569 || window.pageYOffset <= 54) {
      header.style.paddingBottom = ''
    }
  }

  function toggleTools() {
    if (window.innerWidth <= 823 || window.pageYOffset > 55) {
      headerTools.classList.add('header__tools--fixed')

    } else {
      headerTools.classList.remove('header__tools--fixed')
    }
  }

  function toggleHeader() {
    if (window.pageYOffset > 95) {
      headerMenu.classList.add('header__menu--active')

    } else {
      headerMenu.classList.remove('header__menu--active')
    }
  }

  document.addEventListener('scroll', () => {
    if (window.innerWidth < 824 || window.innerWidth > 1200) {
      headerMenu.classList.remove('header__menu--active')
      return
    }
    toggleHeader()
  })

  document.addEventListener('scroll', () => {
    if (window.innerWidth > 823 || window.pageYOffset < 55) {
      headerTools.classList.remove('header__tools--fixed')
      togglePaddindOnToolsFixed()
      return
    }
    togglePaddindOnToolsFixed()
    toggleTools()
  })

  // burger
  function burgerMenu(selector) {
    const menu = $(selector),
      button = $('.header__tool--burger'),
      links = menu.find('.header__link'),
      closeButton = $('.header__close')

    button.on('click', (e) => {
      e.preventDefault()
      toggleMenu()
    });
    closeButton.on('click', (e) => {
      e.preventDefault()
      toggleMenu()
    })
    links.on('click', () => toggleMenu())

    function toggleMenu() {
      if (innerWidth < 824) {
        menu.toggleClass('header--burger-active')
        closeButton.toggleClass('header__close--active')

        if (menu.hasClass('header--burger-active')) {
          toggleOverflowHiddenToBoddy()
        } else {
          toggleOverflowHiddenToBoddy()
        }
      }
    }
  }

  if ('.header__tool--burger') {
    burgerMenu('.header__menu');
  }

  // shop-filters
  function filtersMenu(selector) {
    const menu = $(selector),
      button = $('.shop-catalog__funnel'),
      links = menu.find('.filters-recent__wrap, .filters-recent__link'),
      overlay = $('.header__overlay')

    button.on('click', (e) => {
      e.preventDefault()
      toggleFilters()
    });
    links.on('click', () => toggleFilters())
    overlay.on('click', () => toggleFilters())

    function toggleFilters() {
      menu.toggleClass('filters--active')
      button.toggleClass('shop-catalog__funnel--active')
      if (menu.hasClass('filters--active')) {
        toggleOverflowHiddenToBoddy()
      } else {
        toggleOverflowHiddenToBoddy()
      }
    }
  }
  if ('.filters') {
    filtersMenu('.filters')
  }

  // footer form
  const formInput = document.querySelector('.form__input'),
    formGroup = document.querySelector('.form__group')

  formInput.addEventListener('focus', () => formGroup.classList.add('active'))

  formInput.addEventListener('blur', () => {
    if (!formInput.value) {
      formGroup.classList.remove('active')
    }
  })

  // shop-catalog toggle
  $('.shop-catalog__btn').on('click', function () {
    $('.shop-catalog__btn').removeClass('shop-catalog__btn--active')
    $(this).addClass('shop-catalog__btn--active')
  });

  $('.shop-catalog__btn--list').on('click', function () {
    $('.shop-catalog__grid').addClass('shop-catalog__grid--list')
  });

  $('.shop-catalog__btn--grid').on('click', function () {
    $('.shop-catalog__grid').removeClass('shop-catalog__grid--list')
  });

  // slickslider
  $('.banner__slider').slick({
    arrows: false,
    dots: true,
  });

  $('.partners__slider').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: '-100px',
    responsive: [{
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 824,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '-100px',
        }
      },
      {
        breakpoint: 569,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // rangeslider
  $('.filters-price__input').ionRangeSlider({
    type: 'double',
    prefix: '$',
    hide_min_max: true,
    hide_from_to: true,
    prettify_enabled: true,
    prettify_separator: ".",

    onStart: function (data) {
      $('.filters-price__from').text('$' + data.from.toFixed(2));
      $('.filters-price__to').text('$' + data.to.toFixed(2));
    },
    onChange: function (data) {
      $('.filters-price__from').text('$' + data.from.toFixed(2));
      $('.filters-price__to').text('$' + data.to.toFixed(2));
    },
  });

  // rateyo
  $(".star").rateYo({
    starWidth: '18px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
    spacing: '13px',
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 576 512">' +
      '<path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>' +
      '</svg>'
  });

  // formstyler
  $('.select-style').styler();

  // mixitup
  const containerEl1 = document.querySelector('[data-ref="container-1"]'),
    containerEl2 = document.querySelector('[data-ref="container-2"]'),
    config = {
      controls: {
        scope: 'local'
      }
    };

  if (containerEl1) {
    mixitup(containerEl1, config)
  }

  if (containerEl2) {
    mixitup(containerEl2, config)
  }
});