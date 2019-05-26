

$(function(){
  $("body a").click(function(b){
  b.preventDefault();
  var a=$($(this).attr("href")).offset().top;
  $("html,body").stop().animate({scrollTop:a-30},750)})});

      // Scrolling Effect
      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('.bg-light').removeClass('nnn');
                  $('.bg-light >').removeClass('n');
                  $('li >').removeClass('n');
                  $('.s-nav').removeClass('nn');
                  $('i').removeClass('n');
                  $('.logo').removeClass('n');
                  $('.navbar').addClass('animated slideInDown')
            }
            else {
                  $('.bg-light').addClass('nnn');
                  $('.bg-light >').addClass('n');
                  $('li >').addClass('n');
                  $('.s-nav').addClass('nn');
                  $('i').addClass('n');
                  $('.logo').addClass('n');
                  $('.navbar').removeClass('animated slideInDown')
            }
      });

      $( ".menu-icon" ).click(function() {
            $('.mobile-menu-contant').show();
          });
      $(".mobile-menu-contant a").click(function(){
                  $('.mobile-menu-contant').hide();
      });

      