module.exports = function () {
    const $mobileMenu = $(".mobile-menu");
    const $mobileMenuButtonOpen = $(".open-button-mobile-menu");
    const $mobileMenuButtonClose = $(".close-button-mobile-menu");

    //open mobile-menu
    $mobileMenuButtonOpen.on("click", function () {
        $mobileMenuButtonOpen.addClass("mobile-menu-opened");
        $mobileMenu.css("right", "0");
    });

    //close mobile-menu
    $mobileMenuButtonClose.on("click", function () {
        $mobileMenu.css("right", "-290px");
        $mobileMenuButtonOpen.removeClass("mobile-menu-opened");
    });

    //close mobile-menu if click a child elements
    $mobileMenu.on("click", ".main-menu li", function () {
        $mobileMenu.css("right", "-290px");
        $mobileMenuButtonOpen.removeClass("mobile-menu-opened");
    });

    //close mobile-menu
    $(function($){
        $(document).mouseup(function (e){ //document click event
            if (!$mobileMenu.is(e.target) // if the click was not on block mobile-menu
                && $mobileMenu.has(e.target).length === 0) { // and not a child
                $mobileMenu.css("right", "-290px");
            }
        });
    });
};
