module.exports = function () {
    const $gallery = $(".project-gallery");
    const $galleryNav = $(".project-gallery-nav");
    const $galleryNavContainer = $galleryNav.closest(".project-gallery-nav-container");

    const projectGallery = $gallery.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        draggable: false,
        asNavFor: $galleryNav,
    });

    const projectGalleryNav = $galleryNav.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: $gallery,
        infinite: true,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 680,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                }
            }
        ]
        //     {
        //         breakpoint: 486,
        //         settings: {
        //             vertical: false,
        //             verticalSwiping: false,
        //             slidesToShow: 2
        //         }
        //     },
        //     {
        //         breakpoint: 386,
        //         settings: {
        //             vertical: false,
        //             verticalSwiping: false,
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });

    const $navButtonPrev = $galleryNavContainer.find(".project-gallery-nav-button.prev");
    const $navButtonNext = $galleryNavContainer.find(".project-gallery-nav-button.next");

    $navButtonPrev.on("click", function () {
        $(projectGallery).slick("slickPrev");
    });

    $navButtonNext.on("click", function () {
        $(projectGallery).slick("slickNext");
    });
};
