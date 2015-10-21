var React = require('react');
var _ = require('underscore');

var OptionSpan = React.createClass({
  render: function() {
      return (
        <span className='options'>{this.props.item}</span>
      );
    }
});

var Option = React.createClass({
  render: function() {
    var options = this.props.option.options;
    var spans = [];
    _.each(options, function(item){
      spans.push(<OptionSpan item = {item} />)
    });
    return (
      <div>
        <h3>{this.props.option.name}</h3>
        <span>{spans}</span>
      </div>
    );
  }
});


module.exports = Option;
