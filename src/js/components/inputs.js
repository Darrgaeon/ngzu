module.exports = function () {
    const $productVariant = $(".product-variant");
    const $productVariantFirstArrayItems = $(".product-variant--first .product-variant-item");
    const $productVariantThirdArrayItems = $(".product-variant--third .product-variant-item");

    const $customRadioBlock = $(".custom-radio-block");

    const checkboxBeforeShow = "checkbox-before-show";

    const ArrayTypeChoices = ["type-choice-1", "type-choice-2", "type-choice-3", "type-choice-4"];
    const ArrayControlChoices = ["control-choice-1", "control-choice-2"];

    $productVariant.on("click", "label input", function () {
        const id = $(this).attr("id");

        $.each(ArrayTypeChoices, function (index, value) {
            if (id === value) {
                $productVariantFirstArrayItems.children($customRadioBlock).removeClass(checkboxBeforeShow);
            }
        });

        $.each(ArrayControlChoices, function (index, value) {
            if (id === value) {
                $productVariantThirdArrayItems.children($customRadioBlock).removeClass(checkboxBeforeShow);
            }
        });

        $(this).siblings(".custom-radio-block").toggleClass(checkboxBeforeShow);
        $(this).siblings(".custom-checkbox-block").toggleClass(checkboxBeforeShow);
    });

};
