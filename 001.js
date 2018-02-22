$(document).ready(function () {

    var headerHeight = $('nav').outerHeight();


    $('.scroll').click(function (e) {
        var linkHref = $(this).attr('href');
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 500);
    });

    $(window).scroll(function () {
        var scrollBarLocation = $(this).scrollTop();

        $('.scroll').each(function () {
            var sectionOffset = $(this.hash).offset().top - 400;
            if (sectionOffset <= scrollBarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

});