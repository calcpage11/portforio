// Swiper
const swiper = new Swiper(".swiper" , {

  pagination: {
    el: ".swiper-pagination"
  },

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next"
  }

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