var React = require('react');
var MenuActionCreators = require('../actions/MenuActionCreators');
var MenuItem = React.createClass({
    propTypes: {
        pageID: React.PropTypes.number,
        name: React.PropTypes.string
    },
    render: function() {
        var name = this.props.name;
        return (
            <li>
                <a href="#"
                    onClick={this._onClick}
                > 
                    {name} 
                </a>
            </li>
        );
    },
    _onClick: function() {
        MenuActionCreators.clickMenu(this.props.pageID);
    }
});

module.exports = MenuItem;