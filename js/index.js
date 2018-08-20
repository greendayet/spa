$(document).ready(function () {
    $(".rwd-menu-btn a").click(function () {
        $(".rwd-overlay").fadeToggle(200);
        $(this).toggleClass('rwd-btn-open').toggleClass('rwd-btn-close');
    });
    $('.rwd-overlay').on('click', function () {
        $(".rwd-overlay").fadeToggle(200);
        $(".rwd-menu-btn a").toggleClass('rwd-btn-open').toggleClass('rwd-btn-close');
    });
    $('.rwd-menu a').on('click', function () {
        $(".rwd-overlay").fadeToggle(200);
        $(".rwd-menu-btn a").toggleClass('rwd-btn-open').toggleClass('rwd-btn-close');
    });
});