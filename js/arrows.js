/**
 * Created by LX on 2017/9/5.
 */
$(function () {
    $('#arrows').hover(
        function () {
            $(this).css({'backgroundColor': '#fff'}).children().css({
                'color': '#0abaf0'
            })

        },
        function () {
            $(this).css({'backgroundColor': '#0abaf0'}).children().css({
                'color': '#fff'
            })

        }
    )
});
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $("#arrows").fadeIn();
        }
        else{
            $("#arrows ").hide();
        }
    });
    $("#arrows").click(function(){
        $('html,body').animate({'scrollTop':0},3000);
    });
});