// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;

var Measure = require('./Measure');

function mapStatetoProps (state, ownProps) {
  return {
    name: state.DepVars.getIn([ownProps.depVarId, 'name']),
    measureIds: state.DepVars.getIn([ownProps.depVarId, 'measures']).toJS(),
  };
}

var DepVar = React.createClass({
  render: function () {
    var measures = this.props.measureIds.map(function(measureId) {
      return <Measure key={measureId} measureId={measureId} />;
    });
    return (
      <div className="sample-measure-input-container">
        <h2 className="section-title">Effect</h2>
        <div>
          <p className="sample-depvar-question">Enter a value for: <span className="sample-depvar-name">{this.props.name}</span></p>
          {measures}
        </div>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps)(DepVar);
