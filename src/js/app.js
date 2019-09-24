import $ from 'jquery'
$(document).ready(() =>{
  $("a.scroll").click(function() {
      $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
          duration: 500,
          easing: "swing"
      });
      return false;
  });

  // Input mask
  if( $('.phone').length > 0 ) {
      $(".phone").inputmask({
        mask: "8 999 999 99 99",
        placeholder: " ",
        showMaskOnHover: true,
        onincomplete: function(){ 
          $(this).closest("form").addClass('error-phone'); 
          $(this).addClass('error'); 
          $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
        }, 
        oncomplete: function(){ 
            $(this).closest("form").removeClass('error-phone'); 
            $(this).removeClass('error'); 
            $(this).siblings(".error_phone").removeClass('error').html(''); 
        },
      })
  }
  $('input.phone').on('keydown', function(event) {
      if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
          event.preventDefault();
          $(this).blur();
          return false;
      }
  });
  
  // Slider/
  if( $('.slider_logo').length > 0 ){
    let $slickElementLogo = $('.slider.slider_logo');
    $slickElementLogo.slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        infinite: true,
        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });
  }
  if( $('.slider_review').length > 0 ){
    let $slickElementReview = $('.slider.slider_review');
    $slickElementReview.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        infinite: true
    });
  }
  if( $('.slider_catalog').length > 0 ){
    let $slickElementCatalog = $('.slider.slider_catalog');
    $slickElementCatalog.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        infinite: true
    });
  }

  // Task Tabs
  $(".task.task_tab").on("click", function() {
    if( $(this).hasClass("task--active") ){
      $(this).removeClass("task--active");
      $(this).find(".task__tab-content").slideUp();
    }else{
      if( $(".task.task_tab").hasClass("task--active") ){
        $(".task.task_tab.task--active .task__tab-content").slideUp();
        $(".task.task_tab.task--active").removeClass("task--active");
      }
      $(this).addClass("task--active");
      $(this).find(".task__tab-content").slideDown();
    }
  });

  // Mobile Navbar
  $(".navbar-toggle#nav").on("click", function(){
    if( !$(this).hasClass("navbar-toggle--active")){
        $(this).addClass("navbar-toggle--active");
        $(".navbar-mobile").addClass("navbar-mobile--active");
        $(".navbar-mobile").slideDown();
    }else{
        $(this).removeClass("navbar-toggle--active");
        $(".navbar-mobile").removeClass("navbar-mobile--active");
        $(".navbar-mobile").slideUp();
    }
  });
  $(document).mouseup(function (e){ // событие клика по веб-документу
    let dropdownActive = $(".navbar-mobile.navbar-mobile--active"); // элемент
      
    if (!dropdownActive.is(e.target) // клик был не по блоку
          && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
          && !$(".navbar-toggle#nav").is(e.target) ) { 
              $(".navbar-toggle").removeClass("navbar-toggle--active");
              dropdownActive.removeClass("navbar-mobile--active");
              $(".navbar-mobile").slideUp();
    }
  });
  // Hide Navigation on Mobile
  $(window).resize(function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
      $(".navbar-toggle").removeClass("navbar-toggle--active");
      $(".navbar-mobile.navbar-mobile--active").removeClass("navbar-mobile--active");
      $(".navbar-mobile").slideUp();
    }
  });
});