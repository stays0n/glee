$(function () {
  // лишний отступ у функции встроенный плагин добавляет постоянно, постараюсь внимательнее(

  const headerMenu = document.querySelector('.header__menu'),
    headerTools = document.querySelector('.header__tools'),
    headerClose = document.querySelector('.header__close')

  function showHideTools() {
    if (window.innerWidth <= 568 || window.pageYOffset > 55) {
      headerTools.classList.add('header__tools--fixed')

    } else {
      headerTools.classList.remove('header__tools--fixed')
    }
  }

  function showHideHeader() {
    if (window.pageYOffset > 95) {
      headerMenu.classList.add('header__menu--active')

    } else if (window.pageYOffset <= 95) {
      headerMenu.classList.remove('header__menu--active')
    }
  }

  document.addEventListener('scroll', () => {
    if (window.innerWidth < 824 || window.innerWidth > 1200) {
      headerMenu.classList.remove('header__menu--active')
      return
    }
    showHideHeader()
  })

  document.addEventListener('scroll', () => {
    if (window.innerWidth > 568 || window.pageYOffset < 55) {
      headerTools.classList.remove('header__tools--fixed')
      return
    }
    showHideTools()
  })

  const menuBurger = document.querySelector('.header__tool--burger'),
    bodyTag = document.body;
  let menuToggleFlag = false

  const removeActiveStyles = () => {
    headerMenu.classList.remove('header--burger-active')
    headerClose.classList.remove('header__close--active')
    bodyTag.style.overflow = 'visible'
    menuToggleFlag = false
  }

  menuBurger.onclick = function toggleMenu() {
    if (menuToggleFlag === false) {
      headerMenu.classList.add('header--burger-active')
      headerClose.classList.add('header__close--active')
      bodyTag.style.overflow = 'hidden'
      menuToggleFlag = true

    } else if (menuToggleFlag === true) {
      removeActiveStyles()
    }
  }

  document.addEventListener('click', outsideEvtListener);

  function outsideEvtListener(evt) {
    if (evt.target === menuBurger || menuBurger.contains(evt.target)) {
      return
    }
    removeActiveStyles()
  }

  const formInput = document.querySelector('.form__input'),
    formGroup = document.querySelector('.form__group');

  formInput.addEventListener('focus', () => {
    formGroup.classList.add('active')
  })

  formInput.addEventListener('blur', () => {
    if (formInput.value === '') {
      formGroup.classList.remove('active')
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

  const containerEl1 = document.querySelector('[data-ref="container-1"]'),
    containerEl2 = document.querySelector('[data-ref="container-2"]'),
    config = {
      controls: {
        scope: 'local'
      }
    };
  mixitup(containerEl1, config)
  mixitup(containerEl2, config)

});