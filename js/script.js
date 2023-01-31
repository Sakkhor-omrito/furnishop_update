$('.slick_slider').slick({
    autoplay:true,
    arrows:true,
    prevArrow:'<i class="fa-solid fa-angle-up angle_icon angle_up"></i>',
    nextArrow:'<i class="fa-solid fa-angle-down angle_icon angle_down"></i>',
    vertical:true,
    speed:2000,

  });

  $('.logo_slide').slick({
    autoplay:true,
    arrows:false,
    slidesToShow:5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false,
        }
      },
      {
        breakpoint:575,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      }
    ]
  });

  $('.client_slide').slick({
    autoplay:true,
    arrows:true,
    prevArrow:'<i class="fa-solid fa-arrow-left Arrow_client clients_left"></i>',
    nextArrow:' <i class="fa-solid fa-arrow-right Arrow_client clients_right"></i>',
  });

$(function(){
  var mixer = mixitup('.filter_items');
});

$(function(){

let menuTop=$('.customnav').offset().top;

$(window).on('scroll',function(){

let scrollToTop=$(window).scrollTop();

if(scrollToTop>menuTop){
  $('.customnav').addClass("menufix");
}else{
  $('.customnav').removeClass("menufix");
}


});

//back to top js


$('.banner_click').on('click',function(){
  
  $('html,body').animate({
    scrollTop:$(document).height() -$(window).height()
  },2000)
})

});