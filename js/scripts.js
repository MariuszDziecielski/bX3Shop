$(document).ready(function () {
    $('.nav-tabs li:nth-child(2), .nav-tabs li:nth-child(4)').tooltip({
        title: "We have new products!",
        placement: "top",
        trigger: "hover"
    });
    $('.contact button').tooltip({
        title: "Send message to Us!",
        placement: "top",
        trigger: "hover"
    });
    $('.tooltip_').tooltip({
        title: "Learn more about Our cookie policy!",
        placement: "top",
        trigger: "hover"
    });
    $('.navbar-collapse a:not(.dropdown-toggle)').on('click', function () {
        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-toggle').click();
        }
        $('.navbar-collapse li').removeClass('active');
        $('.navbar-header').removeClass('active');
        $(this).parent().addClass('active');
    });
    $('.dropdown .dropdown-toggle').click(function () {
        $('.navbar-collapse li').removeClass('active');
        $('.navbar-header').removeClass('active');
    });
    $('.dropdown-menu a').click(function () {
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
        $(this).parent().removeClass('active');
    });
    $('.navbar-header a').click(function () {
        $(this).parent().addClass('active');
        $('.navbar-collapse li').removeClass('active');
    });
});