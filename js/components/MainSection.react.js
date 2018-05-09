
var SaAppConstants = require('../constants/SaAppConstants');
var MenuStore = require('../stores/MenuStore');
var React = require('react');
var MenuTypes = SaAppConstants.MenuTypes;
var ThreeBrothersSection = require('./ThreeBrothersSection.react');

var selectPageSection = function (pk) {

    switch (pk) {
        case MenuTypes.HOME:
            return (
                <h3> 這是首頁 </h3>
            );
        case MenuTypes.PAGE_A:
            return (
                <ThreeBrothersSection />
            );

        case MenuTypes.PAGE_B:
            return (
                <h3> 這是 Page B </h3>
            );
        default:
            /* undefault page */

    }
};

var getStateData = function () {

}

var MainSection = React.createClass({
    getInitialState: function() {
        return {
            currentPrimaryKey: MenuStore.getCurrentPrimaryKey()
        };
    },
    componentDidMount: function() {

        MenuStore.addListener('change', this._onChange);
    },
    componentWillUnmonunt: function() {

        MenuStore.removeListener('change', this._onChange);

    },
    render: function() {
        var PageSection = selectPageSection(this.state.currentPrimaryKey);
        return (
            <div className="col-xs-12">
                <hr/>
                {PageSection}
            </div>
        );
    },
    _onChange: function() {
        this.setState(this.getInitialState());

    }

});

module.exports = MainSection;
