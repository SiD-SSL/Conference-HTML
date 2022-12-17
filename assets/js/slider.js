// ====================================================
//       		       DEMO SLIDER JS                //
// ====================================================
$('.demo-slider').slick({
    dots: false,
	arrows: true,
    autoplay: false,
	autoplaySpeed: 2000,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    prevArrow: '<i class="fas fa-caret-left up_arrow"></i>',
	nextArrow: '<i class="fas fa-caret-right bottom_arrow"></i>',
	responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
    		centerMode: false,
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
    		centerMode: false,
		  }
		}
	  ]
});

// ======================================
// 		Banner Plugin Start
// ======================================
$('.banner').slick({
  dots: false,
  arrows: true,
  autoplay: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
});
// ======================================
// 		About US Plugin Start
// ======================================
$('.imgplugin').slick({
  dots: true,
  arrows: false,
  autoplay: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
});
// ======================================
// 		Course Plugin Start
// ======================================
$('.course_plugin').slick({
  dots: false,
  arrows: true,
  autoplay: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
});
// ======================================
// 		Testimonial Plugin Start
// ======================================
$('.tesi_plug').slick({
  dots: false,
  arrows: true,
  autoplay: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
});
// ======================================
// 		Footer Plugin Start
// ======================================
$('.footer_plugin').slick({
  dots: false,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 600,
  infinite: true,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
});