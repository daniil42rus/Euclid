document.addEventListener('DOMContentLoaded', function () {

  // Поиск

  document.querySelector('#search-on').addEventListener('click', function () {
    document.querySelector('.menu-search').classList.toggle('menu-search-active')

  })

  document.querySelector('#search-off').addEventListener('click', function () {
    document.querySelector('.menu-search').classList.toggle('menu-search-active')

  })



  // Баннер

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  
  });

  // Бургер

  document.querySelector('#header-burger').addEventListener('click', function () {
    document.querySelector('#nav__list').classList.toggle('nav__list-active')
    document.querySelector('#header-burger').classList.toggle('header-burger-active')
    document.querySelector('#header-burger').classList.toggle('header-burger')
  })

  // Табы

  document.querySelectorAll('.how__btn').forEach(function (howBtn) {

    howBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      // console.log(path)

      document.querySelectorAll('.how-content').forEach(function (howContent) {
        howContent.classList.remove('how-content-active')
      })

      document.querySelectorAll(`[data-target="${path}"]`).forEach(function (visible) {
        visible.classList.add('how-content-active')
      })

      document.querySelectorAll('.how__btn').forEach(function (howBtnRem) {
        howBtnRem.classList.remove('how__btn-active')
      })

      document.querySelectorAll(`[data-path="${path}"]`).forEach(function (howBtnCol) {
        howBtnCol.classList.add('how__btn-active')
      })

    })
  })

  // accordion

  $(function () {
    $("#accordion").accordion({
      heightStyle: "content",
      active: false,
      collapsible: true
    });
  });






})

