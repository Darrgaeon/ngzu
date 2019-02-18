module.exports = function () {

    const $callbackMeContainer = $(".callback-me-modal__container_block");

    if ($callbackMeContainer.length) {
        const $callbackMeForm = $(".callback-me-modal__container_block form");

        $callbackMeForm.find("input[name='phone']").mask("+7 (999) 999-99-99");

        $callbackMeForm.validate({
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
                message: {
                    required: true
                }
            }
        });
    }
};
