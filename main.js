define('neoforms', [
    './Input'
], function(Input) {
    return {
        newInput: function() {
            return Input();
        },
        changeInputNeoinput: function(selector, context) {
            var objects = {};
            _.each($(selector, context), function(htmlelem) {
                var elem = $(htmlelem)
                var value = elem.val();
                var input = Input();
                objects[elem.attr('name')] = input;
                elem.before(input.getContainer());
                elem.remove();
                input.setValue(value);
            });
            return objects;
        },
        doAlert: function() {
            alert('neoforms alert!');
        }
    };
});
