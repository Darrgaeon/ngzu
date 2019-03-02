module.exports = function () {
    const $generatorFormVoltage = $(".generator-form-voltage");
    const $generatorFormVoltageCheckboxes = $(".generator-form-voltage label div");
    const $generatorFormVariant = $(".generator-form-variant");

    const customCheckboxBlock = (".custom-checkbox-block");

    const checkboxBeforeShow = "checkbox-before-show";

    $generatorFormVoltage.on("click", "label input", function () {
        $.each($generatorFormVoltageCheckboxes, function (item, value) {
           $(value).removeClass(checkboxBeforeShow);
        });

        $(this).siblings(customCheckboxBlock).toggleClass(checkboxBeforeShow);
    });

    $generatorFormVariant.on("click", "label input", function () {
        $(this).siblings(customCheckboxBlock).toggleClass(checkboxBeforeShow);
    });
};
