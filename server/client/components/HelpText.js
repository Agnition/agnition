var React = require('react');

var HelpText = React.createClass({

  getInitialState: function () {
    return {hidden: true};
  },

  showText: function() {
    this.setState({hidden: false});
  },

  hideText: function() {
    this.setState({hidden: true});
  },

  render: function() {
    return (
      <span>
        <div className={this.state.hidden ? 'help-text hidden' : 'help-text'}
          onMouseEnter={this.showText}
          onMouseLeave={this.hideText}>
          {this.props.message}
        </div>
        <span className="help-glyph"
          onMouseEnter={this.showText}
          onMouseLeave={this.hideText} ></span>
      </span>
    );
  }
});

module.exports = HelpText;
