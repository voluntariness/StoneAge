var React = require('react');
var MenuStore = require('../stores/MenuStore');
var MenuItem = require('./MenuItem.react');

function getMenuFromStores() {
    return {
        menus: MenuStore.getMenuItems(),
        currentPrimaryKey: MenuStore.getCurrentPrimaryKey()
    };
}


var MenuSection = React.createClass({
    getInitialState: function() {
        return getMenuFromStores();
    },
    componentDidMount: function() {
        MenuStore.addListener('change', this._onChange);
    },
    componentWillUnmonunt: function() {

        MenuStore.removeListener('change', this._onChange);
    },
    render: function() {
        var menuItems = this.state.menus.map(function(item) 
        {
            return (
                <MenuItem
                    key={item.primaryKey}
                    item={item}
                    currentPrimaryKey={this.state.currentPrimaryKey}
                />
            );
        }, this);
        return (
            <ul className="nav nav-pills">
                {menuItems}
            </ul>
        );
    },
    _onChange: function() {
        this.setState(getMenuFromStores());
    }
});
module.exports = MenuSection;