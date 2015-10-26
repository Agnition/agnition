var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var Immutable = require('immutable');
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require ('../../actions/Samples');
var SetupNewRunOfAdHocExperiment = require('./SetupNewRunOfAdHocExperiment');
var SelectRandomOptions  = 'tbd';
var shortId = require('shortid');
var Actions = require ('../../actions/Samples');

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

var SampleWrapper = React.createClass({
  sampleId: null,
  componentWillMount: function(){
    this.sampleId = shortId.generate();
    this.props.actions.createSample(this.sampleId);
  },
  render: function() {
    return (
    <div>
    <SetupNewRunOfAdHocExperiment expId = {this.props.params.expId} sampleId = {this.sampleId} />
    </div>
    )
  }
});


module.exports = connect(null, mapDispatchToProps)(SampleWrapper);
