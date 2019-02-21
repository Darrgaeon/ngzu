module.exports = function () {
    const $productVariant = $(".product-variant");
    const $productVariantFirstArrayItems = $(".product-variant--first .product-variant-item");
    const $productVariantThirdArrayItems = $(".product-variant--third .product-variant-item");
    const $productVariantFooterPrice = $(".product-variant-footer .price");

    const $catalogResultCompare = $(".catalog-result-compare");

    const customRadioBlock = (".custom-radio-block");
    const customCheckboxBlock = (".custom-checkbox-block");

    const checkboxBeforeShow = "checkbox-before-show";

    const arrayTypeChoices = ["type-choice-1", "type-choice-2", "type-choice-3", "type-choice-4"];
    const arrayTypeCheckboxes = ["type-checkbox-1", "type-checkbox-2", "type-checkbox-3"];
    const arrayControlChoices = ["control-choice-1", "control-choice-2"];

    let priceTypeChoice = 141200;
    let priceTypeCheckbox = 0;
    let priceControlChoice = 0;
    let finishedPrice = 0;

    // Items in block Product-variant
    $productVariant.on("click", "label input", function () {
        const id = $(this).attr("id");
        const getPrice = $(this).data("price");

        $.each(arrayTypeChoices, function (index, value) {
            if (id === value) {
                $productVariantFirstArrayItems.children(customRadioBlock).removeClass(checkboxBeforeShow);

                priceTypeChoice = getPrice;
            }
        });

        $.each(arrayTypeCheckboxes, function (index, value) {
            if (id === value) {

                if ($($(".product-variant--second label div")[index]).hasClass(checkboxBeforeShow)) {
                    priceTypeCheckbox -= getPrice;
                } else {
                    priceTypeCheckbox += getPrice;
                }

            }
        });

        $.each(arrayControlChoices, function (index, value) {
            if (id === value) {
                $productVariantThirdArrayItems.children(customRadioBlock).removeClass(checkboxBeforeShow);

                priceControlChoice = getPrice;

            }
        });

        $(this).siblings(customRadioBlock).toggleClass(checkboxBeforeShow);
        $(this).siblings(customCheckboxBlock).toggleClass(checkboxBeforeShow);

        finishedPrice = priceTypeChoice + priceTypeCheckbox + priceControlChoice;
        let finishedPriceRefactor = finishedPrice.toString().slice(0, 3) + " " + finishedPrice.toString().slice(3, 6);

        $productVariantFooterPrice.text("Итого: " + finishedPriceRefactor);
    });

    //Сравнение
    $catalogResultCompare.on("click", "input", function () {
        $(this).siblings(customCheckboxBlock).toggleClass(checkboxBeforeShow);

        if ($(this).siblings(customCheckboxBlock).hasClass(checkboxBeforeShow)) {
            $(this).siblings("span").text("Убрать из сравнения");
        } else {
            $(this).siblings("span").text("Добавить в сравнение")
        }
    });
};
