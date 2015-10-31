var React = require('react');
var Link = require('react-router').Link;

var About = React.createClass({
  render: function() {
    return (
      <div className="about">
        <p>Run experiments on your life!
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <li><Link to="/new-experiment">back to experiment</Link></li>
      </div>
    );
  }
});

module.exports = About;
