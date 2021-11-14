$(document).ready(function(){
    // mobile search_bar show start 
    $(document).on('click','.search',function(){
        $('.div_mobile_search_bar').fadeIn(400);
        $('.mobile_search_bar').slideDown(400);
    });
    // mobile search_bar show start 
    
    // mobile search_bar_close start 
    $(document).on('click','.mobile_search_bar_close',function(){
        $('.mobile_search_bar').slideUp(400);
        $('.div_mobile_search_bar').fadeOut(400);
    });
    // mobile search_bar_close end
    
    
    // menu icon click start
    $(document).on('click','.menu_icon',function(){
        $('.navbar').slideToggle(500);
        $('body').toggleClass('body_overflow_hidden');
        $('.main_navbar').toggleClass('full_width_and_height');
        $('.navbar').css({"top":"0"});
    });
    // menu icon click end

    // toggle menu  start
    $(document).on('click','.sub_category_click',function(event){
        event.stopPropagation();

// style.css ফাইলে ".menu_arrow_transform_0deg" css কে ".menu_arrow_transform_90deg" css এর নিচে রাখা হয়েছে। অন্যথায় কাজ করবে না। 

        if($(this).siblings().hasClass('togglemenuxyz')){
            $(this).siblings().slideUp(300).removeClass('togglemenuxyz');
            $(this).children('i').addClass('menu_arrow_transform_0deg');
            $(this).children('i').removeClass('menu_arrow_transform_90deg');
            
        }else{
            if($('.sub_category').hasClass('togglemenuxyz')){
                $('.sub_category_click').next().slideUp(300).removeClass('togglemenuxyz');
                $('.sub_category_click').children('i').addClass('menu_arrow_transform_0deg');
                $('.sub_category_click').children('i').removeClass('menu_arrow_transform_90deg');
                $(this).next().slideDown(300).addClass('togglemenuxyz');
                $(this).children('i').addClass('menu_arrow_transform_90deg');
            }else{
                $(this).next().slideDown(300).addClass('togglemenuxyz');
                $(this).children('i').addClass('menu_arrow_transform_90deg');
            } 
 
        } 
    });


    $(document).on('click','.main_navbar',function(){
        $('.navbar').slideToggle(0);
        $('body').toggleClass('body_overflow_hidden');
        $('.main_navbar').toggleClass('full_width_and_height');
    });
    // toggle menu  end

    // menu_close start
    $(document).on('click','.menu_close',function(event){
        event.stopPropagation();
        $('.navbar').slideToggle(0);
        $('body').toggleClass('body_overflow_hidden');
        $('.main_navbar').toggleClass('full_width_and_height');
    });
    // menu_close end

    // single page start 

    // single_big_image change with singe_small_image start
            $('.singel_page_product_image').on('click','.small_image>img',function(){
                const this_src=$(this).attr('src');
                $('.big_image>img').attr("src",this_src);
            });

        // $('.small_image>img').click(function(){
        //     const this_src=$(this).attr('src');
        //     $('.big_image>img').attr("src",this_src);
        // });
        
    // single_big_image change with singe_small_image end

    // single page end 

        // checkout page start

            $('.payment_container').on('click','.payment > div',function(event){
                $('.payment_container>.payment>div').removeClass('payment_border');
                $(this).addClass('payment_border');
            });

            $('.terms_condition>input').click(function(){
                $('.terms_condition>input').toggleClass("yes_customer_agree_with_our_policy");
            });

            $('.order_confirm_container').on('click','.order_confirm>a',function(event){
                event.preventDefault();
                const address_validation= $('address>input').val();

                if(address_validation!=''){
                    if($('.payment > div').hasClass('payment_border')){

                        const checkbox=$('.terms_condition>input').val();

                        if($('.terms_condition>input').hasClass('yes_customer_agree_with_our_policy')){
                            
                            window.location.href="http://youtube.com";

                        }else{
                            swal({
                                title: "Terms condition not fill up",
                                text: "You must be agree with our condition",
                                icon: "error",
                                button: "ok",
                              });
                        }
                        
                    }else{
                        swal({
                            title: "Payment",
                            text: "Please choose your payment system",
                            icon: "warning",
                            button: "ok",
                          });
                    }
                }else{
                        swal({
                            title: "Address",
                            text: "Please provide your address",
                            icon: "warning",
                            button: "ok",
                        });
                }
            });

        // checkout page end

});