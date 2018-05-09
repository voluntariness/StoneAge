var keyMirror = require('keymirror');

module.exports = {
    ActionTypes: keyMirror({
        INIT: null,
        CLICK_MENU: null
    }),
    MenuTypes: keyMirror({
        HOME: null,
        PAGE_A: null,
        PAGE_B: null
    })
};