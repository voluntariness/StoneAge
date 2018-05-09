
var SaApp = require('./components/SaApp.react');
var SaAppActionCreators = require('./actions/SaAppActionCreators');
var React = require('react');
window.React = React;

SaAppActionCreators.init();

React.render(
    <SaApp />,
    document.getElementById('container')
);





