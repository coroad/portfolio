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

/*
// jQuery scroll event - settime //
		$(function () {
			var t = 0;
			setTimeout(function () {
				$("body, html").animate({ "scrollTop": "0px" }, 300, function () {

					$("#page2").addClass("active");
					$(window).scroll(function () {
						t = $(window).scrollTop();

						if (t < $("#page2").offset().top - 100) {
							$("#page2").addClass("active");
						}
						else if (t < $("body, html").height()) {
							$("#page3").addClass("active");
						}
					});
				});
			}, 300);
    });
    */

// Modal window - web //
    $(".open__web").on("click",function(){
      $(".background").addClass("dim__web");
      $(".modal__web").show();
    });
    $(".close").on("click",function(){ /*질문: 밖에 눌러도 꺼지게하기*/
      $(".modal__web").hide();
      $(".background").removeClass("dim__web");
    });
  
// Modal window - mobile //
    $(".open__mob").on("click",function(){
      $(".background").addClass("dim__mob");
      $(".modal__mob").show();
    });
    $(".close").on("click",function(){
      $(".modal__mob").hide();
      $(".background").removeClass("dim__mob");
  
    });
  
// content slider //

    
// Modal slider //
  $('.modal__slide__web').slick({
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-next xi-caret-up-circle xi-2x'></button>",
    nextArrow: "<button type='button' class='slick-prev xi-caret-up-circle xi-2x'></button>"
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
});
