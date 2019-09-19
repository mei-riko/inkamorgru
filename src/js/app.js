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
  
      // Slider
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
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                }
            ]
        });
      }

});