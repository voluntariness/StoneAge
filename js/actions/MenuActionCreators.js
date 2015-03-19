'use strict';
var SaAppDispatcher = require('../dispatcher/SaAppDispatcher');
var SaAppConstants = require('../constants/SaAppConstants');
var ActionTypes = SaAppConstants.ActionTypes;
module.exports = {
    clickMenu: function(pageID) {
        SaAppDispatcher.dispatch({
            type: ActionTypes.CLICK_MENU,
            pageID: pageID
        });
    }
};