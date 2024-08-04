// Hamburger
$(function () {
  $('.header-contents-right-gnavbtn').on("click", function () {
    $('.header-contents-right-gnavbtn').toggleClass('open');
    $('.header-contents-right-nav').toggleClass('open');
  });
});

// Swiper
const swiper1 = new Swiper(".swiper1" , {
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  loop: true,
	slidesPerView: 1,
	spaceBetween: 100,
	initialSlide: 0,
  centeredSlides: true,
	// autoplay: {
		// delay: 3000,
		// disableOnInteraction: true
	// },
});

const swiper2 = new Swiper(".swiper2" , {
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  loop: true,
	slidesPerView: 1,
	spaceBetween: 80,
	initialSlide: 0,
  breakpoints: {
    769: {
      slidesPerView: 3,
    },
  },
});

const swiper3 = new Swiper(".swiper3" , {
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  loop: true,
	slidesPerView: 1,
	spaceBetween: 80,
	initialSlide: 0,
  breakpoints: {
    769: {
      slidesPerView: 3,
    }
  },
});

// Inview
$(function () {
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });
});

// HideText
$('.hide-text').hide();
$(".readmore").on("click", function() {
    $(this).toggleClass("on-click");
    $(this).prev().slideToggle();
});