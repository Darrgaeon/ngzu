module.exports = function () {
    const $gallery = $(".product-gallery");
    const $galleryNav = $(".product-gallery-nav");
    const $galleryNavContainer = $galleryNav.closest(".product-gallery-nav-container");

    const productGallery = $gallery.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        draggable: false,
        asNavFor: $galleryNav,
    });

    const productGalleryNav = $galleryNav.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: $gallery,
        infinite: true,
        focusOnSelect: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 685,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 433,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    const $navButtonPrev = $galleryNavContainer.find(".product-gallery-nav-button.prev");
    const $navButtonNext = $galleryNavContainer.find(".product-gallery-nav-button.next");

    $navButtonPrev.on("click", function () {
        $(productGallery).slick("slickPrev");
    });

    $navButtonNext.on("click", function () {
        $(productGallery).slick("slickNext");
    });
};
