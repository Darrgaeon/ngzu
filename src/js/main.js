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

    $(document).ready(function () {
        require("./components/mobile-menu")();
        require("./components/maps")();
        require("./components/project-gallery")();
    });
}

init.bind(window)();
