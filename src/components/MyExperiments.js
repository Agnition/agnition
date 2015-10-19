var React = require('react');
var connect = require('react-redux').connect;

var OpenExps = require('./OpenExps');
var ClosedExps = require('./ClosedExps');


// STATELOGIC logic to add in state properties
function mapStatetoProps (state) {
  return {
    openExps: state
      .MyExperiments
      .filter(function(exp) 
        { return exp.get('active') 
      })
      .toJS(),

    closedExps: state
      .MyExperiments
      .filterNot(function(exp) 
        { return exp.get('active') 
      })
      .toJS(),
  };
}

var MyExps = React.createClass({
  render: function() {
    return (
      <div>
      //STATELOGIC ROUTING how to pass in the correct set of exps?
      //currently setup to just filter my expierments inside open and closed exp components...
      <h2>Open Experiments</h2>
      <OpenExps openExps = {this.props.openExps} />
      
      <h2>Closed Experiments</h2>
      <ClosedExps closedExps = {this.props.closedExps} />

      </div>
    );
  }
});


module.exports = connect(mapStatetoProps)(MyExps);