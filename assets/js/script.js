$(document).ready(function(){

    // Header & Footer
    const headerToggleButton = $(".header-toggle"),
        headerNav = $(".header-nav");
    headerToggleButton.click(function(){
        headerToggleButton.toggleClass("active");
        headerNav.toggleClass("active");
    });

    $(".header-nav-has-child a").click(function(){
        if($(window).width() > 991){
            $(this).toggleClass("active").next(".header-nav-list-child").toggleClass("active");
        }else{
            $(this).toggleClass("active").next(".header-nav-list-child").slideToggle();
        }
        return false;
    });
    function navChildClose(){
        $(".header-nav-has-child a").removeClass("active");
        $(".header-nav-list-child").removeClass("active");
    }

    $(".header-nav-list-child-close").click(function(){
        navChildClose();
    });

    $(".header-search-toggle").click(function(){
        $(".header-search").toggleClass("active");
    });

    $(".footer-toggle").click(function(){
        $(this).toggleClass("active").next(".footer-item-content").slideToggle(600);
    });

    $(".header-nav-title").click(function(){
        if($(window).width() < 991){
            $(this).toggleClass("active").next(".header-nav-sub").slideToggle()
        }
    });
    

    $(document).mouseup( function(e){
		let search = $( ".header-search" );
		var navChild = $( ".header-nav-has-child" );
        if(e.target.closest(".header-search-toggle") == null){
            if (!search.is(e.target) && search.has(e.target).length === 0) {
                search.removeClass("active");
            }
        }
        if (!navChild.is(e.target) && navChild.has(e.target).length === 0) {
            navChildClose();
        }
        if($(window).width() < 991){
            if(e.target.closest(".header-toggle") == null){
                if (!headerNav.is(e.target) && headerNav.has(e.target).length === 0) {
                    headerToggleButton.removeClass("active");
                    headerNav.removeClass("active");
                }
            }
        }
	});

    $(window).resize(function(){
        setTimeout(function(){
            if($(window).width() > 1200){
                headerToggleButton.removeClass("active");
                headerNav.removeAttr("style");
            }
            if($(window).width() > 991){
                $("div.footer-item-content").removeAttr("style");
            }
        }, 200);
    });

    // Anchors
    $("a.anchor").click(function(){
        $("html, body").stop().animate({
            scrollTop: ($($(this).attr("href")).offset().top)
        }, 800);
        return false;
    });

    // FAQ
    $(".faq-item-header").click(function(){
        $(".faq-item-header").not($(this)).each(function(){
            $(this).removeClass("active").next("div").slideUp(600);
        });
        $(this).toggleClass("active").next("div").slideToggle(600);
    });
    
    // Input mask
    $("[type='tel']").inputmask("+375 (99) 999-99-99");

    // Sliders
    if($(".case-slider").length){
        const caseSwiper = new Swiper(".case-slider", {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 600,
            navigation: {
                prevEl: ".case-prev",
                nextEl: ".case-next"
            },
        });
    }

    if($(".certificates-slider-inner").length){
        const certificatesSwiper = new Swiper(".certificates-slider-inner", {
            slidesPerView: 3,
            spaceBetween: 20,
            speed: 600,
            pagination: {
                el: ".certificates-pagination",
                clickable: true,
            },
            navigation: {
                prevEl: ".certificates-prev",
                nextEl: ".certificates-next"
            },
            breakpoints: {
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
            },
        });
    }

    if($(".banks-slider-inner").length){
        const banksSwiper = new Swiper(".banks-slider-inner", {
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 600,
            navigation: {
                prevEl: ".banks-prev",
                nextEl: ".banks-next"
            },
            breakpoints: {
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
            },
        });
    }

    if($(".popular-slider").length){
        const popularSwiper = new Swiper(".popular-slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 600,
            navigation: {
                prevEl: ".popular-prev",
                nextEl: ".popular-next"
            },
            breakpoints: {
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
            },
        });
    }

    $(".benefits-toggle").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active").find("span").empty().text($(this).attr("data-active"));
        }else{
            $(this).removeClass("active").find("span").empty().text($(this).attr("data-dafault"));
        }
        $(".benefits-footer-text").slideToggle();
    });

});