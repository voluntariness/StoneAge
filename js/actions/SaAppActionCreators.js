'use strict';
var SaAppDispatcher = require('../dispatcher/SaAppDispatcher');
var SaAppConstants = require('../constants/SaAppConstants');
var ActionTypes = SaAppConstants.ActionTypes;
module.exports = {
    init: function() {
        SaAppDispatcher.dispatch({
            type: ActionTypes.INIT
        });
    }
};