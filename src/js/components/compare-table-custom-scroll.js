module.exports = function (PerfectScrollBar) {
    const tables = document.querySelectorAll(".table-custom-scroll");

    [...tables].forEach(table => {
        const scroll = new PerfectScrollBar(table, {
        });


        $(scroll.element).on("ps-x-reach-start", function () {
            $(this)
                .addClass("ps-scroll-reach-start")
                .removeClass("ps-scroll-reach-end");

            $(this).parent()
                .addClass("parent-ps-scroll-reach-start")
                .removeClass("parent-ps-scroll-reach-end");
        });

        $(scroll.element).on("ps-x-reach-end", function () {
            $(this)
                .addClass("ps-scroll-reach-end")
                .removeClass("ps-scroll-reach-start");

            $(this).parent()
                .addClass("parent-ps-scroll-reach-end")
                .removeClass("parent-ps-scroll-reach-start");
        });

        $(window).resize(function () {
            scroll.update();
        });
    });
};
