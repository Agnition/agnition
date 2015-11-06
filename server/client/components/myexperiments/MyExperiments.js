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
      <div className="container">
        <div className="row">
          <div className="subsection-v my-exps col-sm-12 col-md-offset-2 col-md-8">
            <div>
              <h2 className= 'section-title'>Open Experiments</h2>
              {openExps.length > 0
                ? <Exps exps = {openExps} active = {true}/>
                : <p>{'You don\'t have any open experiments!'}</p>
              }
            </div>
            <div>
              <h2 className= 'section-title'>Closed Experiments</h2>
              {closedExps.length > 0
                ? <Exps exps = {closedExps} active = {false}/>
                : <p> You don't have any finished experiments!</p>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = connect(mapStatetoProps)(MyExps);
