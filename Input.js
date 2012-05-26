define([
    'jquery'
  , 'underscore'
  , 'backbone'
], function($, _, Backbone) {
    var container = $('<span class="neoinput"></span>');
    var inputElem = $('<input>');
    var labelElem = $('<span>');

    return {
        getContainer: function() {
            return container;
        }
    };
});
