'use strict';
var SaAppDispatcher = require('../dispatcher/SaAppDispatcher');
var SaAppConstants = require('../constants/SaAppConstants');
var ActionTypes = SaAppConstants.ActionTypes;
module.exports = {
    clickMenu: function(primaryKey) {
        SaAppDispatcher.dispatch({
            type: ActionTypes.CLICK_MENU,
            primaryKey: primaryKey
        });
    }
};