var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header');
var Me = require('./components/me.js');
var Projects = require('./components/projects');

var App = React.createClass({
  render: function() {
    return (
      <div>
      	<Header />
        <Me />
      	<Projects />
      </div>
    );
  }
});
ReactDOM.render(
  <App />,
  document.getElementById('app')
);