module.exports = function () {
    const transitionDuration = 300;

    const $productContentTabs = $(".product-content-tabs ul li");
    const $productContentContainer = $(".product-content-container")

    $productContentTabs.click(function () {

        const index = $(this).index();

        $.each($productContentTabs, function (item, value) {
            $(value).removeClass("active");
        });

        $.each($productContentContainer.children("div"), function (item, value) {
            $(value).hide(200);
        });

        $($productContentContainer.children("div")[index]).slideToggle(transitionDuration);

        $(this).toggleClass("active");
    })
};
