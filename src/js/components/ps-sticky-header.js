// Let"s get this crap done.

module.exports = function () {
    const $tables = $(".ps-table-fixed-header");

    $tables.each(function () {
        const $table = $(this);
        const $tableHead = $table.find("thead");

        $(window).scroll(function () {
            const tableHeight = $table.height();
            const offset = $table.offset();
            const paddings = $table.css(["padding-top", "padding-bottom", "padding-left", "padding-right"]);

            // Fix for top padding
            const topOffset = offset.top + parseInt(paddings["padding-top"]);

            const scrollOffset = $(this).scrollTop();

            const diff = scrollOffset - topOffset;

            if (diff > 0 && diff < tableHeight) {
                if (!$table.hasClass("ps-fixed-header--active")) {
                    $table.addClass("ps-fixed-header--active");
                }

                $tableHead.css({
                    "transform": `translateY(${diff}px)`
                });

            } else {
                if ($table.hasClass("ps-fixed-header--active")) {
                    $table.removeClass("ps-fixed-header--active");
                }

                if (diff < tableHeight) {
                    $tableHead.css({
                        "transform": `translateY(0)`
                    });
                } else {
                    $tableHead.css({
                        "transform": `translateY(${diff})`
                    })
                }
            }
        });
    });
};
