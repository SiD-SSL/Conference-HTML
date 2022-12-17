$(document).ready(function(){


    //---------- NAV BAR HOVER JS ------------//
    $(".nav-item").hover(function() {

        let key = $(this).data('key');
        $(this).find('.hover-menu'+key).removeClass('d-none');

    }, function() {
        $('.hover-menu').addClass('d-none');
    });


    //----------- ONCLICK NAV ITEM -----------// 	
    $('.nav-item').on('click',function(){
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });


    //--------- Nav Bar jQuery Start ---------// 		
    $(".icon_jquery").click(function(){
        $(".last_jquery").fadeToggle();
    });


    //------------- Header jQuery ------------// 	
    $(".close").click(function(){
        $(".form").fadeOut();
    })
    $(".register").click(function(){
        $(".register_form").fadeIn();
    })
    $(".log_in").click(function(){
        $(".login_form").fadeIn();
    })

    //--------- Counter Plugin Start ---------//
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});



//---------- NAV BAR FIXED JS ------------//
$(window).scroll(function(){
    var couting_scroll = $(window).scrollTop()
    if(couting_scroll>120){
        $("#searchBar").addClass("d-none");
        $("#fixedNavBar").removeClass("d-none");
        $("#fixedNavBar").addClass("d-block fixed");
    }
    else{
        $("#searchBar").removeClass("d-none");
        $("#fixedNavBar").addClass("d-none");
        $("#fixedNavBar").removeClass("d-block fixed");
    }
})