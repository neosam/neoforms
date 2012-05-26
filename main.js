define('neoforms', [
    './Input'
], function(Input) {
    return {
        newInput: function() {
            return Input;
        },
        doAlert: function() {
            alert('neoforms alert!');
        }
    };
});
