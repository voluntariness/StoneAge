var SaAppDispatcher = require('../dispatcher/SaAppDispatcher');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var SaAppConstants = require('../constants/SaAppConstants');

var ActionTypes = SaAppConstants.ActionTypes;

var _menus = [
    {pageID: 1, name: 'AA'},
    {pageID: 2, name: 'BB'}
];

var MenuStore = assign({}, EventEmitter.prototype, {
    init: function() {
        
    },
    getMenuItems: function () {
        return _menus;
    }
});
MenuStore.dispatchToken = SaAppDispatcher.register(function(action) {
    switch (action.type) {
        case ActionTypes.CLICK_MENU:
            console.log(action.pageID);
            break;
        default:
    }
});
module.exports = MenuStore;
