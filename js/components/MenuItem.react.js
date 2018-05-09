var React = require('react');
var MenuActionCreators = require('../actions/MenuActionCreators');

var MenuItem = React.createClass({
    propTypes: {
        item: React.PropTypes.object,
        currentPrimaryKey: React.PropTypes.string
    },
    render: function() {
        var item = this.props.item;
        var classes = [
            (item.primaryKey === this.props.currentPrimaryKey ? 'active' : '')
        ].join(' ');
        return (
            <li className={classes}>
                <a href="#"onClick={this._onClick}>
                    {item.name} 
                </a>
            </li>
        );
    },
    _onClick: function() {
        MenuActionCreators.clickMenu(this.props.item.primaryKey);
    }
});

module.exports = MenuItem;