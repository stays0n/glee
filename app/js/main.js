$(function () {

  const headerMenu = document.querySelector('.header__menu'),
    headerTools = document.querySelector('.header__tools');

  function showTools() {
    if (window.innerWidth > 568 || window.pageYOffset < 60) {
      headerTools.classList.remove('tools-fixed')

    } else if (window.innerWidth <= 568 && window.pageYOffset > 60) {
      headerTools.classList.add('tools-fixed')
    }
  }

  function showHeader() {
    if (window.innerWidth < 824 || window.innerWidth > 1200) {
      headerMenu.classList.remove('header-styles')
    }

    if (window.pageYOffset > 150) {
      headerMenu.classList.add('header-styles')

    } else if (window.pageYOffset <= 150) {
      headerMenu.classList.remove('header-styles')
    }
  }

  window.onscroll = function () {
    showTools()
    showHeader()
  }

  const menuBurger = document.querySelector('.header__tool--burger'),
    bodyTag = document.body;
  let menuToggleFlag = false

  menuBurger.onclick = function toggleMenu() {

    if (menuToggleFlag === false) {
      headerMenu.classList.add('burger-active')
      bodyTag.style.overflow = 'hidden'
      menuToggleFlag = true

    } else if (menuToggleFlag === true) {
      headerMenu.classList.remove('burger-active')
      bodyTag.style.overflow = 'visible'
      menuToggleFlag = false
    }
  }

  document.addEventListener('click', outsideEvtListener);

  function outsideEvtListener(evt) {
    if (evt.target === menuBurger || menuBurger.contains(evt.target)) {
      return
    }
    headerMenu.classList.remove('burger-active')
    bodyTag.style.overflow = 'visible'
    menuToggleFlag = false
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




  let containerEl1 = document.querySelector('[data-ref="container-1"]'),
    containerEl2 = document.querySelector('[data-ref="container-2"]');
  let config = {
    controls: {
      scope: 'local'
    }
  };
  mixitup(containerEl1, config)
  mixitup(containerEl2, config)

});