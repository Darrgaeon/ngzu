// prevent babel from losing this
// this should be window object

function init() {
    this.$ = require("jquery/dist/jquery");
    this.jQuery = this.$;

    require("svg4everybody/dist/svg4everybody")();
    require("retinajs/dist/retina");
    require("uikit/dist/js/uikit");
    require("uikit/dist/js/uikit.min");
    require("slick-carousel/slick/slick");
    require("jquery-validation/dist/jquery.validate");
    require("jquery.maskedinput/src/jquery.maskedinput");

    $(document).ready(function () {
        require("./components/mobile-menu")();
        require("./components/maps")();
        require("./components/project-gallery")();
        require("./components/ps-sticky-header")();
        require("./components/forms-validate")();
        require("./components/callback-contacts")();
        require("./components/callback-me-modal")();
        require("./components/projects-catalog-project-gallery")();
        require("./components/product-gallery")();
        require("./components/inputs")();
        require("./components/product-content-spoilers")();
        require("./components/accordion")();

        const PerfectScrollBar = require("perfect-scrollbar/dist/perfect-scrollbar.min");
        require("./components/compare-table-custom-scroll")(PerfectScrollBar);
    });
}

init.bind(window)();
