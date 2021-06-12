$(function () {

  const headerMenu = document.querySelector('.header__menu'),
    headerTools = document.querySelector('.header__tools'),
    header = document.querySelector('.header')

  const bodyTag = document.body;
  toggleOverflowHiddenToBoddy = () => {
    bodyTag.classList.contains('body-hidden') === true ? bodyTag.classList.remove('body-hidden') : bodyTag.classList.add('body-hidden')
  }

  function togglePaddindOnToolsFixed() {
    if (window.innerWidth < 569 && window.pageYOffset > 55) {
      header.style.paddingBottom = 85 + 'px'
      toggleTools()

    } else if (window.innerWidth > 569 || window.pageYOffset <= 55) {
      header.style.paddingBottom = ''
    }
  }

  function toggleTools() {
    if (window.innerWidth <= 823 && window.pageYOffset > 55) {
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

  if (headerMenu) {
    burgerMenu(headerMenu);
  }

  // shop-filters
  const shopFilters = $('.shop__filters'),
    overlay = $('.header__overlay')

  function filtersMenu(selector) {
    let menu = $(selector),
      button = $('.shop-catalog__funnel'),
      links = menu.find('.filters-recent__wrap, .filters-recent__link'),
      overlayHere = overlay

    button.on('click', (e) => {
      e.preventDefault()
      toggleFilters()
    });

    links.on('click', () => toggleFilters())
    overlayHere.on('click', () => toggleFilters())

    function toggleFilters() {
      menu.toggleClass('filters--active')
      button.toggleClass('shop-catalog__funnel--active')
      if (menu.hasClass('filters--active')) {
        bodyTag.classList.add('body-hidden')
      } else {
        bodyTag.classList.remove('body-hidden')
      }
    }
  }
  if (shopFilters) {
    filtersMenu(shopFilters)
  }

  // blog-page-filters
  const blogPageFilters = $('.blog-page__filters')

  function filtersMenuBlogPage(selector) {
    const menu = $(selector),
      button = $('.blog-page__funnel'),
      links = menu.find('.filters-posts__wrap, .filters-posts__link, .filters-search__btn'),
      overlayHere = overlay

    button.on('click', (e) => {
      e.preventDefault()
      toggleFilters()
    });
    links.on('click', () => toggleFilters())
    overlayHere.on('click', () => toggleFilters())

    function toggleFilters() {
      menu.toggleClass('filters--active')
      button.toggleClass('filters-funnel--active')
      if (menu.hasClass('filters--active')) {
        bodyTag.classList.add('body-hidden')
      } else {
        bodyTag.classList.remove('body-hidden')
      }
    }
  }
  if (blogPageFilters) {
    filtersMenuBlogPage(blogPageFilters)
  }

  // blog-one-filters
  const blogOneFilters = $('.blog-one__filters')

  function filtersMenuBlogOne(selector) {
    const menu = $(selector),
      button = $('.blog-one__funnel'),
      links = menu.find('.filters-posts__wrap, .filters-posts__link, .filters-search__btn'),
      overlayHere = overlay

    button.on('click', (e) => {
      e.preventDefault()
      toggleFilters()
    });
    links.on('click', () => toggleFilters())
    overlayHere.on('click', () => toggleFilters())

    function toggleFilters() {
      menu.toggleClass('filters--active')
      button.toggleClass('filters-funnel--active')
      if (menu.hasClass('filters--active')) {
        bodyTag.classList.add('body-hidden')
      } else {
        bodyTag.classList.remove('body-hidden')
      }
    }
  }
  if (blogOneFilters) {
    filtersMenuBlogOne(blogOneFilters)
  }

  // form label
  const formInput = document.querySelector('.footer__input'),
    formGroup = document.querySelector('.footer__group'),
    blogInputFirst = document.getElementById('form-name'),
    blogGroupFirst = document.querySelector('.form__field--first'),
    blogInputSecond = document.getElementById('form-email'),
    blogGroupSecond = document.querySelector('.form__field--second')

  function moveLabel(input, group) {
    input.addEventListener('focus', () => group.classList.add('active'))
    input.addEventListener('blur', () => {
      if (!input.value) {
        group.classList.remove('active')
      }
    })
  }

  if (formInput && formGroup) {
    moveLabel(formInput, formGroup)
  }
  if (blogInputFirst && blogGroupFirst) {
    moveLabel(blogInputFirst, blogGroupFirst)
  }
  if (blogInputSecond && blogGroupSecond) {
    moveLabel(blogInputSecond, blogGroupSecond)
  }

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

  // production tabs
  $('.tabs__btn').on('click', function(evt) {
    evt.preventDefault()
    $('.tabs__btn').removeClass('tabs__btn--active')
    $(this).addClass('tabs__btn--active')

    $('.tabs__item').removeClass('tabs__item--active')
    $($(this).attr('href')).addClass('tabs__item--active')
  })

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

  $('.experience__list').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    responsive: [{
        breakpoint: 1451,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 2000,
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

  $('.sliders__small').slick({
    asNavFor: '.sliders__big',
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          autoplay: true,
          autoplaySpeed: 4000,
        }
      }
    ]
  });

  $('.sliders__big').slick({
    asNavFor: '.sliders__small',
    fade: true,
    arrows: false
  });

  $('.related__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/icons/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/icons/sprite.svg#arrow-right"></use></svg></button>',
    appendArrows: $('.related__arrows'),
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 2,
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
  $('.select-style, .production__input').styler();

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