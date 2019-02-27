module.exports = function () {
    // const $galleryContainerNavItems = $(".gallery-nav-items");
    // const $galleryNavItems = $(".gallery-nav-items li");
    // const $galleryContainer = $(".home-page-gallery");
    //
    // const $galleryNavButtonPrev = $(".gallery-nav-button--prev");
    // const $galleryNavButtonNext = $(".gallery-nav-button--next");
    //
    // $galleryContainerNavItems.on("click", "li", function () {
    //     const index = $(this).index();
    //     const $galleryContainerChildren = $galleryContainer.children()[index];
    //
    //     $.each($galleryContainer.children(), function (item, value) {
    //         $(value).removeClass("active-slide");
    //     });
    //
    //     $($galleryContainerChildren).toggleClass("active-slide");
    //
    //     $.each($galleryNavItems, function (item, value) {
    //         $(value).removeClass("active");
    //     });
    //
    //    $(this).toggleClass("active");
    // });
    //
    // $galleryNavButtonPrev.click(function () {
    //     const indexNavItem = $galleryContainerNavItems.children(".active").index();
    //     let $galleryContainerChildren;
    //
    //     $.each($galleryNavItems, function (item, value) {
    //         $(value).removeClass("active");
    //     });
    //
    //     if (indexNavItem === 0 ) {
    //         $($galleryNavItems[2]).toggleClass("active");
    //         $galleryContainerChildren = $galleryContainer.children()[2];
    //     } else {
    //         $($galleryNavItems[indexNavItem - 1]).toggleClass("active");
    //         $galleryContainerChildren = $galleryContainer.children()[indexNavItem - 1];
    //     }
    //
    //     $.each($galleryContainer.children(), function (item, value) {
    //         $(value).removeClass("active-slide");
    //     });
    //
    //     $($galleryContainerChildren).toggleClass("active-slide");
    // });
    //
    // $galleryNavButtonNext.click(function () {
    //     const indexNavItem = $galleryContainerNavItems.children(".active").index();
    //     let $galleryContainerChildren;
    //
    //     $.each($galleryNavItems, function (item, value) {
    //         $(value).removeClass("active");
    //     });
    //
    //     if (indexNavItem === 2) {
    //         $($galleryNavItems[0]).toggleClass("active");
    //         $galleryContainerChildren = $galleryContainer.children()[0];
    //     } else {
    //         $($galleryNavItems[indexNavItem + 1]).toggleClass("active");
    //         $galleryContainerChildren = $galleryContainer.children()[indexNavItem + 1];
    //     }
    //
    //     $.each($galleryContainer.children(), function (item, value) {
    //         $(value).removeClass("active-slide");
    //     });
    //
    //     $($galleryContainerChildren).toggleClass("active-slide");
    // });
};
