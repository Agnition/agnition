var React = require('react');
var connect = require('react-redux').connect;
var Exps = require('./ExpsTable');
var _ = require('underscore');

// creates two seperate lists of exps that will be seperately rendered
function mapStatetoProps (state) {
  return {
    exps : state.Experiments.toJS()
  };
}

var MyExps = React.createClass({
  render: function() {
    var openExps = _.filter(this.props.exps, function(exp) {
      return exp.active;
    });
    var closedExps = _.filter(this.props.exps, function(exp) {
      return !exp.active;
    });
    return (
      <div className="my-exps">
        <div>
          <h1>Open Experiments</h1>
          {openExps.length > 0
            ? <Exps exps = {openExps} />
            : <p>You don't have any open experiments!</p>
          }
        </div>
        <div>
          <h1>Closed Experiments</h1>
          {closedExps.length > 0
            ? <Exps exps = {closedExps} />
            : <p> You don't have any finished experiments!</p>
          }
        </div>
      </div>
    );
  }
});


module.exports = connect(mapStatetoProps)(MyExps);
