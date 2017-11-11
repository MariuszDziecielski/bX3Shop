const $listItems = $('.navbar-collapse li'),
    $navbarHeader = $('.navbar-header');
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
function removeActiveClass() {
    $listItems.removeClass('active');
    $navbarHeader.removeClass('active');
}
$('.navbar-collapse a:not(.dropdown-toggle)').click(e => {
    if ($('.navbar-collapse').hasClass('in')) {
        $('.navbar-toggle').click();
    }
    removeActiveClass();
    $(e.target).parent().addClass('active');
});
$('.dropdown .dropdown-toggle').click(() => {
    removeActiveClass();
});
$('.dropdown-menu a').click(e => {
    $(`a[href="${$(e.target).attr('href')}"]`).tab('show');
    $(e.target).parent().removeClass('active');
});
$('.navbar-header a').click(e => {
    $(e.target).parent().addClass('active');
    $listItems.removeClass('active');
});