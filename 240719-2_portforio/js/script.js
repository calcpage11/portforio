const swiper = new Swiper(".swiper" , {

  pagination: {
    el: ".swiper-pagination"
  },

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next"
  }

});

$(function () {
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });
});