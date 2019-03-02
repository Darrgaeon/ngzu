module.exports = function () {
    const nodeSelector = ".chosen-select";
    const $nodes = $(nodeSelector);

    if ($nodes.length) {

        $nodes.each(function () {
            const $currentNode = $(this);
            const selectPlaceholder = $currentNode.data("placeholder");

            const render = (...args) => {
                const [event, target] = args;

                const $selectedItems = $(target).children("option:selected");
                const $selectricWrapper = $(target).closest(".selectric-wrapper");
                const $selectricResultNode = $selectricWrapper.find(".selectric > .label");

                const selectedItemsCount = $selectedItems.length;

                if (selectedItemsCount === 0) {
                    $selectricResultNode.text(selectPlaceholder);
                }
            };

            $currentNode.on("selectric-init", function (...args) {
                render(...args);
            });

            const $selectric = $currentNode.selectric({
                arrowButtonMarkup: `<svg class="chosen-select-container__icon"><use xlink:href="svg/sprite.svg#svg--arrow"></use></svg>`,
                openOnHover: true,
            });
            $selectric.on("selectric-change", function (...args) {
                render(...args);
            });
        });
    }
};
