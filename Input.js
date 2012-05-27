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
            inputElem.focusout(viewMode);
            inputElem.focus();
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

        function update() {
            inputElem.val(value);
            labelElem.html(value);
        }

        function init() {
            editMode();
        }

        init();

        return {
            getContainer: function() {
                return container;
            },
            getValue: function() {
                return value;
            },
            setValue: function(v) {
                value = v;
                update();
            },
            setChangeFunction: function(func) {
                onChange = func;
            }
        };
    };
});
