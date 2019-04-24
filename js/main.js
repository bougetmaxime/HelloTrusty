/* 
   CounterUp
   ========================================================================== */
    jQuery(document).ready(function( $ ) {
      $('.counter').counterUp({
        time: 500
      });
    });

/* 
   MixitUp
   ========================================================================== */
    $(function(){
      $('#portfolio').mixItUp();
    });

/* 
   Touch Owl Carousel
   ========================================================================== */
    $(".touch-slider").owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 1,
        itemsDesktopSmall: [1024, 1],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
    });
    $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');

/* 
   Sticky Nav
   ========================================================================== */
  /*  $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });*/

/* 
   VIDEO POP-UP
   ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });

/* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });
    $('.back-to-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

/* 
   One Page Navigation & wow js
   ========================================================================== */
  jQuery(function($) {
      //Initiat WOW JS
      new WOW().init();

      // one page navigation 
      $('.main-navigation').onePageNav({
              currentClass: 'active'
      });    
  });

  jQuery(document).ready(function() {
     
      $('body').scrollspy({
          target: '.navbar-collapse',
          offset: 195
      });

      $(window).on('scroll', function() {
          if ($(window).scrollTop() > 830) {
              //$('.fixed-top').addClass('menu-bg');
              $('.logo-menu').addClass('hidden');
              $('.menu-button').addClass('hidden');
             
          } else {
              //$('.fixed-top').removeClass('menu-bg');
              $('.logo-menu').removeClass('hidden');
              $('.menu-button').removeClass('hidden');

          }
      });

  });

  /* Boutton platform 
 ========================================================*/
  jQuery(document).ready(function() {
    $(window).scroll(function() {
      var currentHeight = $(window).scrollTop();
      var topDivFeature = $("#section-features-One").offset().top;
      var bottomDivFeature = $("#section-features-Five").offset().top;
  
      if (currentHeight > topDivFeature && currentHeight < bottomDivFeature) {
          $('#boutton_side_platform').removeClass( 'hidden' );

      }else  {
          $('#boutton_side_platform').addClass( 'hidden' );
      }
    });

    $('#boutton_side_platform .btn').click(function(){
      setTimeout(function(){ 
        if(document.getElementById('messenger-side-label').classList.contains('active')){
          document.getElementById("slider_side_boutton").style.top = "0%"
          document.getElementById("slider_section_boutton").style.left = "0%"

          document.getElementById("algoImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555607501/website/00_-_Algo_Trusty.svg"
          document.getElementById("botImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555599834/website/01_-_Qui_coopter_Messenger.svg"
          document.getElementById("saasImg").src =   "https://res.cloudinary.com/trusty/image/upload/v1538996727/website/SaaS.svg"
          document.getElementById("relanceImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555598700/website/02_-_Relance_messenger.svg"
          document.getElementById("publipostageImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555607501/website/00_-_Algo_Trusty.svg"

        } else if(document.getElementById('slack-side-label').classList.contains('active')){
          document.getElementById("slider_side_boutton").style.top = "51%";
          document.getElementById("slider_section_boutton").style.left = "50%";

          document.getElementById("algoImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555607501/website/00_-_Algo_Trusty.svg"
          document.getElementById("botImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555598223/website/01_-_Qui_coopter_slack.svg"
          document.getElementById("saasImg").src =   "https://res.cloudinary.com/trusty/image/upload/v1538996727/website/SaaS.svg"
          document.getElementById("relanceImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555598700/website/02_-_Relance_messenger.svg"
          document.getElementById("publipostageImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555607501/website/00_-_Algo_Trusty.svg"

        }
       }, 100);
    });

    
    $('#boutton_section_platform .btn').click(function(){
      setTimeout(function(){ 
        if(document.getElementById('messenger-section-label').classList.contains('active')){
          document.getElementById("slider_side_boutton").style.top = "0%"
          document.getElementById("slider_section_boutton").style.left = "0%"

          document.getElementById("algoImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555607501/website/00_-_Algo_Trusty.svg"
          document.getElementById("botImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555599834/website/01_-_Qui_coopter_Messenger.svg"
          document.getElementById("saasImg").src =   "https://res.cloudinary.com/trusty/image/upload/v1538996727/website/SaaS.svg"
          document.getElementById("relanceImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555598778/website/02_-_Relance_slack.svg"
          document.getElementById("publipostageImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555607501/website/00_-_Algo_Trusty.svg"

        } else if(document.getElementById('slack-section-label').classList.contains('active')){
          document.getElementById("slider_side_boutton").style.top = "51%";
          document.getElementById("slider_section_boutton").style.left = "50%";

          document.getElementById("algoImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555607501/website/00_-_Algo_Trusty.svg"
          document.getElementById("botImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555598223/website/01_-_Qui_coopter_slack.svg"
          document.getElementById("saasImg").src =   "https://res.cloudinary.com/trusty/image/upload/v1538996727/website/SaaS.svg"
          document.getElementById("relanceImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555598778/website/02_-_Relance_slack.svg"
          document.getElementById("publipostageImg").src = "https://res.cloudinary.com/trusty/image/upload/v1555607501/website/00_-_Algo_Trusty.svg"

        }
       }, 100);
    });

  });



  /* Nivo Lightbox
  ========================================================*/
  /*jQuery(document).ready(function( $ ) {    
     $('.lightbox').nivoLightbox({
      effect: 'fadeScale',
      keyboardNav: true,
    });

  });*/

  /* stellar js
  ========================================================*/
  $(function(){
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 40,
      responsive: true
    });
  });

/* 
   Page Loader
   ========================================================================== */
   $(window).load(function() {
    "use strict";
    $('#loader').fadeOut();
   });