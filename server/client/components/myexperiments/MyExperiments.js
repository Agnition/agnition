var React = require('react');
var connect = require('react-redux').connect;
var Exps = require('./ExpsTable');


// creates two seperate lists of exps that will be seperately rendered
function mapStatetoProps (state) {
  return {
    openExps: state
      .Experiments
      .filter(function(exp) {
        return exp.get('kind') === 'ad_hoc'; 
      })
      .toJS(),
    closedExps: state
      .Experiments
      .filterNot(function(exp){ 
        return exp.get('kind') === 'ad_hoc'; 
      })
      .toJS(),
  };
}

var MyExps = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <h2>Open Experiments</h2>
          <Exps exps = {this.props.openExps} />
        </div>
        <div>
          <h2>Closed Experiments</h2>
          <Exps exps = {this.props.closedExps} />
        </div>
      </div>
    );
  }
});


module.exports = connect(mapStatetoProps)(MyExps);
