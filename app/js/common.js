

$(function () {

    $('.menu-link').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('close');
        $("header .menu-list").slideToggle();
    });


});


