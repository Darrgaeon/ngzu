module.exports = function () {
    const $productVariant = $(".product-variant");
    const $productVariantFirstArrayItems = $(".product-variant--first .product-variant-item");
    const $productVariantThirdArrayItems = $(".product-variant--third .product-variant-item");

    const $catalogResultCompare = $(".catalog-result-compare");

    const customRadioBlock = (".custom-radio-block");
    const customCheckboxBlock = (".custom-checkbox-block");

    const checkboxBeforeShow = "checkbox-before-show";

    const ArrayTypeChoices = ["type-choice-1", "type-choice-2", "type-choice-3", "type-choice-4"];
    const ArrayControlChoices = ["control-choice-1", "control-choice-2"];

    // Items in block Product-variant
    $productVariant.on("click", "label input", function () {
        const id = $(this).attr("id");

        $.each(ArrayTypeChoices, function (index, value) {
            if (id === value) {
                $productVariantFirstArrayItems.children(customRadioBlock).removeClass(checkboxBeforeShow);
            }
        });

        $.each(ArrayControlChoices, function (index, value) {
            if (id === value) {
                $productVariantThirdArrayItems.children(customRadioBlock).removeClass(checkboxBeforeShow);
            }
        });

        $(this).siblings(customRadioBlock).toggleClass(checkboxBeforeShow);
        $(this).siblings(customCheckboxBlock).toggleClass(checkboxBeforeShow);
    });

    //Сравнение
    $catalogResultCompare.on("click", "input", function () {
        $(this).siblings(customCheckboxBlock).toggleClass(checkboxBeforeShow);

        if ($(this).siblings(customCheckboxBlock).hasClass(checkboxBeforeShow)) {
            $(this).siblings("span").text("Убрать из сравнения")
        } else {
            $(this).siblings("span").text("Добавить в сравнение")
        }

    });

};
