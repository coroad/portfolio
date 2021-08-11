// Fullpage Plugin //
$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
		navigation: true,
        navigationPosition: 'left',
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        sectionsColor:['#FBAB7E','#fff','#333eff','#73b99d','#fff']
    });
// Move animation Plugin //
    AOS.init(); 
// Light slider Plugin //
  $('#imageGallery').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      thumbItem:10,
      slideMargin:0,
      enableDrag: false,
      currentPagerPosition:'left',
      onSliderLoad: function(el) {
          el.lightGallery({
              selector: '#imageGallery .lslide'
          });
      }   
  });

// Modal window - web //
    $(".open__web").on("click",function(){
      $(".background").addClass("dim__web");
      $(".modal__web").show();
    });
    $(".close").on("click",function(){
      $(".modal__web").hide();
      $(".background").removeClass("dim__web");
    });
  
// Modal window - mobile //
    $(".open__mob").on("click",function(){
      $(".modal__mob").show();
    });
    $(".close").on("click",function(){
      $(".modal__mob").hide();
  
    });
  
// content slider //
  $('.web__container, .mob__all__container').slick({
    prevArrow: "<button type='button' class='slick-prev xi-angle-left xi-2x'></button>",
    nextArrow: "<button type='button' class='slick-next xi-angle-right xi-2x'></button>"
  });

  
    
// Modal slider //
  $('.modal__slide__web, .modal__slide__mob').slick({
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-next xi-caret-up-circle xi-2x'></button>",
    nextArrow: "<button type='button' class='slick-prev xi-caret-up-circle xi-2x'></button>",
    draggable : true
  });


// Design slider //
   $('.slide1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
     asNavFor: '.slide2',
     variableWidth: true  
});
$('.slide2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slide1',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
    variableWidth: true
});

// Mobile - Toggle button //
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  });

// responsive web //
  const size = window.innerWidth;
  if (size <= 768) {
    $("header > .page1").removeClass("inner");
  };

});