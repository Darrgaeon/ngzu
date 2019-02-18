module.exports = function () {

    const $callbackContainer = $(".contacts-callback-form-container");

    if ($callbackContainer.length) {

        const $callbackForm = $(".contacts-callback-form-container form");

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
    }
};
