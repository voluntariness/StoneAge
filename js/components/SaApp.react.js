
// var MainSection = require('./MainSection.react');
var MenuSection = require('./MenuSection.react');
var React = require('react');

var SaApp = React.createClass({
    render: function() {
        return (
            <div className="sa-app">
                <MenuSection />
            </div>
        );
    }
});
module.exports = SaApp;