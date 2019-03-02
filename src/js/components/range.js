module.exports = function () {
    let $range = $(".range-input"),
        $inputMin = $(".generator-slider-status__from input"),
        $inputMax = $(".generator-slider-status__to input"),
        instance,
        min = parseInt($range.data("min")),
        max = parseInt($range.data("max"));

    if ($range.length) {
        $range.ionRangeSlider({
            type: "double",
            min: min,
            max: max,
            from: min,
            to: max,

            hide_min_max: true,
            hide_from_to: true,
            grid: false,

            onStart: function (data) {
                $inputMin.prop("value", data.from);
                $inputMax.prop("value", data.to);
            },

            onChange: function (data) {
                $inputMin.prop("value", data.from);
                $inputMax.prop("value", data.to);
            }
        });

        instance = $range.data("ionRangeSlider");

        $inputMax.on("change keyup input", function () {
            let val = $(this).prop("value");

            // validate
            if (val < min) {
                val = min;
            }

            instance.update({
                to: val
            });
        });

        $inputMin.on("change keyup input", function () {
            let val = $(this).prop("value");

            // validate
            if (val < min) {
                val = min;
            } else if (val > max) {
                val = max;
            }

            instance.update({
                from: val
            });
        });
    }
};
