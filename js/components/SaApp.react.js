
var MainSection = require('./MainSection.react');
var MenuSection = require('./MenuSection.react');
var React = require('react');

var SaApp = React.createClass({
    render: function() {
        return (
            <div>
                <header>
                    <MenuSection />
                </header>
                <div className="row">
                    <MainSection />
                </div>
            </div>
        );
    }
});
module.exports = SaApp;