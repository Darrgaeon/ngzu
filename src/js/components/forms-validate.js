module.exports = function () {

    // Validation
    $.validator.addMethod("phoneCheck", function (value, element) {
        // if no _ in phone number (placeholders)
        return !(/_/.test(value));
    });

    $.validator.addMethod("textCheck", function (value, element) {
        if (value.length > 2) {
            //
            return !(/[0-9_!?.+\-]+/.test(value));
        }

        return false;
    });
};
