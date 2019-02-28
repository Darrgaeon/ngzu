module.exports = function () {
    const $homeGallery = $(".home-page-gallery");
    const $galleryVideo = $(".gallery-video");

    //настройка карусели

    $homeGallery.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: false,
        fade: true,
        infinite: true,
        draggable: false,
    });


    //настройка кнопок

    const $navButtonPrev = $(".gallery-nav-button--prev");
    const $navButtonNext = $(".gallery-nav-button--next");

    const $galleryContainerNavItems = $(".gallery-nav-items");
    const $galleryNavItems = $(".gallery-nav-items li");

    $navButtonPrev.on("click", function (e) {
        const $link = $(e.target);
        e.preventDefault();

        if(!$link.data("lockedAt") || +new Date() - $link.data("lockedAt") > 500) {
            $($homeGallery).slick("slickPrev");

            const indexNavItem = $galleryContainerNavItems.children(".active").index();

            $.each($galleryNavItems, function (item, value) {
                $(value).removeClass("active");
            });

            if (indexNavItem === 0) {
                $($galleryNavItems[2]).toggleClass("active");
            } else {
                $($galleryNavItems[indexNavItem - 1]).toggleClass("active");
            }
        }

        $link.data("lockedAt", +new Date());

        if($homeGallery.slick("slickCurrentSlide") === 2) {
            $galleryVideo[0].play();
        }
    });

    $navButtonNext.on("click", function (e) {
        const $link = $(e.target);
        e.preventDefault();

        if(!$link.data("lockedAt") || +new Date() - $link.data("lockedAt") > 500) {
            $($homeGallery).slick("slickNext");
            const indexNavItem = $galleryContainerNavItems.children(".active").index();

            $.each($galleryNavItems, function (item, value) {
                $(value).removeClass("active");
            });

            if (indexNavItem === 2) {
                $($galleryNavItems[0]).toggleClass("active");
            } else {
                $($galleryNavItems[indexNavItem + 1]).toggleClass("active");
            }
        }

        $link.data("lockedAt", +new Date());

        if($homeGallery.slick("slickCurrentSlide") === 2) {
            $galleryVideo[0].play();
        }

    });

    //настройка li

    $galleryContainerNavItems.on("click", "li", function (e) {
        const index = $(this).index();
        const indexNavItem = $galleryContainerNavItems.children(".active").index();

        if (index === indexNavItem) {
            return;
        }

        const $link = $(e.target);
        e.preventDefault();

        if(!$link.data("lockedAt") || +new Date() - $link.data("lockedAt") > 500) {
            if (index > indexNavItem && index - indexNavItem === 1) {
                $($homeGallery).slick("slickNext");
            } else if (index === 0 && indexNavItem === 2) {
                $($homeGallery).slick("slickGoTo", 0);
            } else {
                $($homeGallery).slick("slickPrev");
            }
        }

        $link.data("lockedAt", +new Date());

        $.each($galleryNavItems, function (item, value) {
            $(value).removeClass("active");
        });

        $(this).toggleClass("active");

        if($homeGallery.slick("slickCurrentSlide") === 2) {
            $galleryVideo[0].play();
        }
    });

    const $buttonClose = $(".home-page-gallery-close-button");
    const $buttonOpen = $(".home-page-gallery-container-open-button .button-open");
    const $sliderContainer = $(".slider-container");
    const transitionDuration = 800;

    $buttonClose.click(function () {
        $sliderContainer.slideToggle(transitionDuration);
        setTimeout(function () {
            $buttonOpen.show()
        }, 800)
    });

    $buttonOpen.click(function () {
        $buttonOpen.hide();
        $sliderContainer.slideToggle(transitionDuration);
    });
};
