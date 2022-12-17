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

