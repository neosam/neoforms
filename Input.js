define([
    'jquery'
], function($) {
    return function() {
        var container = $('<span class="neoinput"></span>');
        var inputElem = $('<input>');
        var labelElem = $('<span>');
        var value = '';

        var onChange = function() {};

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
            onChange(value);
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
            },
            getLabel: function() {
                return label;
            },
            setLabel: function(v) {
                value = v;
            }
            setChangeFunction: function(func) {
                onChange = func;
            }
        };
    };
});
