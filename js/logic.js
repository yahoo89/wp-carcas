$ = jQuery;
$(document).ready(function () {
    var width = document.body.clientWidth;

    $("#menuOpen").click(function (e) {
        $(this).toggleClass("opened");
    });

    if (width <= 1024) {
        $("#mainMenu .menu-item-has-children > a").append("<span></span>");
        $("#mainMenu .menu-item-has-children span").click(function () {
            $(this).parent().next().slideToggle(300);
            $(this).toggleClass("active");
            return false;
        });
    }

    //WPCF7
    $(this).on('click', '.wpcf7-not-valid-tip', function () {
        $(this).prev().trigger('focus');
        $(this).fadeOut(500, function () {
            $(this).remove();
        });
    });

    $(window).bind("resize", function () {

    });

});