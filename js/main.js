$(document).ready(function(){

    $('.mm_btn').on('click', function(){
        if($('.main_nav').is(':visible')){
            $('.main_nav').slideUp();
            $(this).removeClass('act');
        }else{
            $('.main_nav').slideDown();
            $(this).addClass('act');
        }
    });

    $('.has_submenu').each(function(){
        var has_submenu=$(this);
        var sub_menu=$(this).find('.sub_menu');
        $(has_submenu).on('click', function(e){
            e.preventDefault();
            if($(sub_menu).is(':visible')){
                $(sub_menu).slideUp();
            }else{
                $(sub_menu).slideDown();
            }
        });
    });


    /*
    $('.mm_btn').click(function () {
        $('.mm_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".mm_menu.open").length) {
            $(".mm_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });



    if($('.main_slider > div').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            fade: true,
        });
    }

    $('.cat_item').each(function(){
        var cat_item=$(this);
        var toggler=$(this).find('.cat_toggle');
        var cat_submenu=$(this).find('.cat_submenu');
        $(toggler).on('click', function(){
            if($(cat_submenu).is(':visible')){
                $(cat_submenu).slideUp();
                $(cat_item).removeClass('active');
            }else{
                $(cat_submenu).slideDown();
                $(cat_item).addClass('active');
            }
        });
    });



    $('.tab-content .tab-pane').each(function(){
        var tab_content_slider = $(this).find('.tab_content_slider');
        var tab_content_slider_item = $(this).find('.tab_content_slider > div');
        if(tab_content_slider_item.length > 4){
            $(tab_content_slider).slick({
                autoplay: false,
                dots: true,
                arrows: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }else if($(window).innerWidth() < 575 && tab_content_slider_item.length > 1){
            $(tab_content_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }else if($(window).innerWidth() < 767 && tab_content_slider_item.length > 2){
            $(tab_content_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1
            });
        }else if($(window).innerWidth() < 991 && tab_content_slider_item.length > 3){
            $(tab_content_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1
            });
        }

    });




    if($('.product_bigimg_slider .slider_item').length >1){
        $('.product_bigimg_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            //fade: true,
            asNavFor: '.product_slider_nav',
            responsive: [

                {
                    breakpoint: 660,
                    settings: {
                        dots: true,
                    }
                }
            ]
        });
    }


    $('.product_slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product_bigimg_slider',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite:false,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    vertical:true,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow:4,
                    vertical:true,
                }
            },
            {
                breakpoint: 660,
                settings: {
                    vertical:true,
                    slidesToShow: 3,
                }
            }
        ]
    });




    $('#show_more').on('click', function(){
        if($('#more').is(':visible')){
            $('#more').slideUp();
            $(this).removeClass('act').text('Развернуть');
        }else{
            $('#more').slideDown();
            $(this).addClass('act').text('Свернуть');
        }
    });





    if($('.related_products_slider > div').length > 4){
        $('.related_products_slider').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.related_products_slider > div').length > 1){
        $('.related_products_slider > div').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 767 && $('.related_products_slider > div').length > 2){
        $('.related_products_slider').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 991 && $('.related_products_slider > div').length > 3){
        $('.related_products_slider').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    }



    if($(window).innerWidth() < 575){
        $('.specifications > h2').on('click', function () {
                if($('.char_block').is(':visible')){
                    $('.char_block').slideUp();
                    $(this).addClass('closed');
                }else{
                    $('.char_block').slideDown();
                    $(this).removeClass('closed');
                }
        });
    }


    $('.sidebar_menu .arrow').on('click', function(){
        var sub_menu=$(this).next();
        if($(sub_menu).is(':visible')){
            $(this).parent().removeClass('open');
            $(sub_menu).slideUp();
        }else{
            $(this).parent().addClass('open');
            $(sub_menu).slideDown();
        }
    });


    $('.cat_item').each(function(){
        var showBtn=$(this).find('.show_submenu');
        var cat_submenu=$(this).find('.cat_submenu');
        $(showBtn).on('click', function(){
            $(cat_submenu).toggleClass('show');
            if($(cat_submenu).hasClass('show')){
                $(showBtn).text('Свернуть');
            }else{
                $(showBtn).text('Развернуть');
            }
        });
    });



    $('.amount .down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.amount .up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });



    $('.cart_modal_body_item').each(function(){
        var cart_modal_body_item=$(this);
        var c_size=$(this).find('.c_size');
        var mm_hide=$(this).find('.mm_hide');
        $(c_size).on('click', function () {
            if($(mm_hide).is(':visible')){
                $(cart_modal_body_item).removeClass('open');
                $(mm_hide).slideUp();
            }else{
                $(cart_modal_body_item).addClass('open');
                $(mm_hide).slideDown();
            }
        });

    });



    $(window).resize(function(){
        var header_row = $('.header_row').outerHeight();
        var header_height = $('header').outerHeight();
        console.log(header_height);
        $(window).scroll(function(){
            if($(window).innerWidth() > 1160){
                if ($(this).scrollTop() > header_row) {
                    $('.main_nav_container').addClass('fixed');
                } else {
                    $('.main_nav_container').removeClass('fixed');
                }
            }else{
                if ($(this).scrollTop() > header_height) {
                    $('.main_nav_container').addClass('fixed');
                } else {
                    $('.main_nav_container').removeClass('fixed');
                }
            }

        });

    });
    $(window).resize();

*/

});


