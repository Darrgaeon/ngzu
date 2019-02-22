module.exports = function () {
    const $cardHeaderButton = $(".card .card-header button");
    const cardTable = ".card-table";

    $cardHeaderButton.on("click", function () {
        const $cardHeader = $(this).parent(".card-header");
        const $card = $cardHeader.parent(".card");

       $(this).children(".card-header__button-icon").toggleClass("icon-active");

        $($card).children(cardTable).slideToggle("slow");
    })
};
