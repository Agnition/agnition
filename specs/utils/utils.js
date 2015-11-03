var React = require('react');


//outputs a string of passed in properties for checking if passed in correctly
var mockDivComponent = function(className) {
  return React.createClass({
      render: function() {
        return (
          <div className={className}>{JSON.stringify(this.props)}</div>
        )
      }
    });
};


module.exports.mockDivComponent = mockDivComponent;
