module.exports = function () {
    const $galleryNavItems = $(".gallery-nav-items li");

    $galleryNavItems.click(function () {

        $.each($galleryNavItems, function (item, value) {
            $(value).removeClass("active");
        });

       $(this).toggleClass("active");
    });

};
