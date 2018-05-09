var SaAppDispatcher = require('../dispatcher/SaAppDispatcher');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var SaAppConstants = require('../constants/SaAppConstants');

var ActionTypes = SaAppConstants.ActionTypes;
var MenuTypes = SaAppConstants.MenuTypes;

var _menus = [
    {
        primaryKey: MenuTypes.HOME, 
        name: 'Home'
    }, {
        primaryKey: MenuTypes.PAGE_A, 
        name: 'Page-A'
    }, {
        primaryKey: MenuTypes.PAGE_B, 
        name: 'Page-B'
    }
];

var CHANGE_EVENT = 'change';

var _currentPrimaryKey = null;

var MenuStore = assign({}, EventEmitter.prototype, {
    init: function() {
        _currentPrimaryKey = _currentPrimaryKey || _menus[0].primaryKey;
    },
    getCurrentPrimaryKey: function() {
        return _currentPrimaryKey;
    },
    getMenuItems: function() {
        return _menus;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    }
});
MenuStore.dispatchToken = SaAppDispatcher.register(function(action) {
    switch (action.type) {
        case ActionTypes.CLICK_MENU:
            _currentPrimaryKey = action.primaryKey;
            MenuStore.emitChange();
            break;
        case ActionTypes.INIT:
            MenuStore.init();
            break;
        default:

    }
});

module.exports = MenuStore;
