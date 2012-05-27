define([
    'jquery'
  , 'underscore'
  , 'backbone'
], function($, _, Backbone) {
    return function() {
        var container = $('<span class="neoinput"></span>');
        var inputElem = $('<input>');
        var labelElem = $('<span>');
        var value = '';

        function editMode() {
            inputElem.val(value);
            container.html('');
            container.append(inputElem);
            inputElem.change(editDone);
        }
        function viewMode() {
            labelElem.html(value);
            container.html('');
            container.append(labelElem);
            labelElem.click(editMode);
        }

        function editDone() {
            value = inputElem.val();
            viewMode();
        }

        function init() {
            inputElem.change(editDone);
            labelElem.click(editMode);
            editMode();
        }

        init();

        return {
            getContainer: function() {
                return container;
            }
        };
    };
});
