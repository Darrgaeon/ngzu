module.exports = function () {

    const $contactsCallbackContainer = $(".contacts-callback-form-container");

    if ($contactsCallbackContainer.length) {
        const transitionDuration = 200;

        const $callbackForm = $(".contacts-callback-form-container form");
        const $callbackFormContainer = $callbackForm.parent();
        const $successCallbackBlock = $(".contacts-callback-form-container-success");

        $callbackForm.find("input[name='phone']").mask("+7 (999) 999-99-99");

        $callbackForm.validate({
            errorPlacement: function(error, element) {},

            rules: {
                phone: {
                    required: true,
                    phoneCheck: true,
                    minlength: 7
                },
                name: {
                    required: true,
                    minlength: 4,
                    textCheck: true
                },
                comment: {
                    required: true,
                    minlength: 4,
                    textCheck: true
                },
                message: {
                    required: true
                }
            }
        });

        function toggleState() {
            $callbackFormContainer.slideToggle(transitionDuration);
            $successCallbackBlock.slideToggle(transitionDuration);
        }

        $callbackForm.submit(function (event) {
            event.preventDefault();

            const selectors = [
                "input.error",
                "textarea.error"
            ];

            const hasErrors = selectors
                .map(selector => $(this).find(selector))
                .reduce((result, current) => result.concat(...current), [])
                .filter(item => $(item).hasClass("error"))

                .length !== 0;

            if (hasErrors) {
                return null;
            }

            toggleState();
        });

        $successCallbackBlock.find(".button").on("click", function () {
            toggleState();
        });
    }
};
