var React = require('react');
var connect = require('react-redux').connect;
var Exps = require('./ExpsTable');
var utils = require('../../utils/componentUtils');
var _ = require('underscore');

// creates two seperate lists of exps that will be seperately rendered
function mapStatetoProps (state) {
  return {
    exps : state.Experiments.toJS()
  };
}

var MyExps = React.createClass({
  render: function() {
    var openExps = _.filter(this.props.exps,function(exp) {
      return exp.active;
    });
    var closedExps = _.filter(this.props.exps,function(exp) {
      return !exp.active;
    });
    return (
      <div>
        <div>
          <h2>Open Experiments</h2>
          <Exps exps = {openExps} />
        </div>
        <div>
          <h2>Closed Experiments</h2>
          <Exps exps = {closedExps} />
        </div>
      </div>
    );
  }
});


module.exports = connect(mapStatetoProps)(MyExps);
