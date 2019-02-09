module.exports = function () {
    const projectsGalleryNode = $(".projects-gallery");
    const transitionDuration = 200;

    if (projectsGalleryNode.length) {
        function getNearbySlides(slick, currentSlideIndex) {
            const currentSlideNode = slick.$slides.eq(currentSlideIndex);

            const prevSlideNode = $(currentSlideNode).prev();
            const nextSlideNode = $(currentSlideNode).next();

            const prevSlide = prevSlideNode.length !== 0 ? prevSlideNode : $(currentSlideNode).parent().children().last();
            const nextSlide = nextSlideNode.length !== 0 ? nextSlideNode : $(currentSlideNode).parent().children().first();

            return {
                prev: prevSlide,
                next: nextSlide
            };
        }

        function getGalleryItem(node) {
            return $(node).find(".projects-gallery__item");
        }

        function getImageSrc(node) {
            return $(getGalleryItem(node)).data("slider-img");
        }

        function getPowerInfo(node) {
            return $(getGalleryItem(node)).data("slider-power");
        }

        function getSliderData(node) {
            return {
                img: getImageSrc(node),
                power: getPowerInfo(node),
            }
        }

        function changeNavBlock(node, slick, currentSlideIndex) {
            const transitionDuration = 200;

            const prevNavBlock = $(node).find(".projects-nav-prev");
            const nextNavBlock = $(node).find(".projects-nav-next");

            const nearbySlides = getNearbySlides(slick, currentSlideIndex);

            const prevSlideData = getSliderData(nearbySlides.prev);
            const nextSlideData = getSliderData(nearbySlides.next);

            prevNavBlock.find("img").fadeTo(transitionDuration, 0.30, function () {
                $(this).attr("src", prevSlideData.img);
            }).fadeTo(transitionDuration, 1);
            prevNavBlock.find(".projects-nav__orange-circle").fadeTo(transitionDuration, 0.30, function () {
                $(this).html(`<span class="fw-medium">${prevSlideData.power}</span> кВт`);
            }).fadeTo(transitionDuration, 1);

            nextNavBlock.find("img").fadeTo(transitionDuration, 0.30, function () {
                $(this).attr("src", nextSlideData.img);
            }).fadeTo(transitionDuration, 1);

            nextNavBlock.find(".projects-nav__orange-circle").fadeTo(transitionDuration, 0.30, function () {
                $(this).html(`<span class="fw-medium">${nextSlideData.power}</span> кВт`);
            }).fadeTo(transitionDuration, 1);
        }

        const $infoNode = projectsGalleryNode.closest(".projects-slider-container").parent().find(".projects-slider-info");
        const render = (...args) => {
            const [event, slick, currentSlideIndex = null, nextSlideIndex = null] = args;

            // Don't forget!!!
            // It is before change!
            const _currentSlideIndex = currentSlideIndex !== null ? currentSlideIndex : slick.currentSlide;
            const _nextSlideIndex = nextSlideIndex !== null ? nextSlideIndex : _currentSlideIndex;

            changeNavBlock(slick.$slider.closest(".projects-slider-container"), slick, _nextSlideIndex);

            const $currentSlide = slick.$slides.eq(_nextSlideIndex);
            const $currentSlideGalleryItem = $currentSlide.find(".projects-gallery__item");

            const template = `<h3>${$currentSlideGalleryItem.data("slider-heading")}</h3>${$currentSlideGalleryItem.data("slider-description")}`;
            $infoNode.slideUp(transitionDuration, function () {
                $(this).html(template).slideDown(transitionDuration);
            });
        };

        projectsGalleryNode.on("init beforeChange", render);

        const projectsGallery = projectsGalleryNode.slick({
            infinite: true,
            slidesToShow: 1,
            fade: true,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            draggable: false
        });

        const container = $(".projects-slider-container");
        const prevButtonBlock = $(container).find(".projects-nav-prev");
        const nextButtonBlock = $(container).find(".projects-nav-next");

        [$(prevButtonBlock), $(nextButtonBlock)].map(item => {
            item.find("a").on("click", event => {
                event.preventDefault();
            });
        });

        $(prevButtonBlock).on('click', (event) => {
            event.stopPropagation();

            projectsGallery.slick('slickPrev');
        });

        $(nextButtonBlock).on('click', (event) => {
            event.stopPropagation();

            projectsGallery.slick('slickNext');
        });
    }
};
