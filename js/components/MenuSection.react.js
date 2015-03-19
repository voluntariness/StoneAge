var React = require('react');
var MenuStore = require('../stores/MenuStore');
var MenuItem = require('./MenuItem.react');

function getMenuFromStores() {
    return {
        menus: MenuStore.getMenuItems()
    };
}


var MenuSection = React.createClass({
    getInitialState: function() {
        return getMenuFromStores();
    },
    componentDidMount: function() {

    },
    render: function() {
        var menuItems = this.state.menus.map(function(item) 
        {
            return (
                <MenuItem
                    key={item.pageID}
                    pageID={item.pageID}
                    name={item.name}
                />
            );
        }, this);
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        {menuItems}
                    </ul>
                </div>
            </nav>
        );
    },
    _onChange: function() {
    }
});
module.exports = MenuSection;