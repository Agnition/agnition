var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require('../../actions/Samples');
var SetupNewRunOfAdHocExperiment = require('./SetupNewRunOfAdHocExperiment');
var shortId = require('shortid');

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

var SampleWrapper = React.createClass({
  sampleId: null,
  componentWillMount: function() {
    this.sampleId = shortId.generate();
    this.props.actions.createSample(this.sampleId);
  },
  render: function() {
    return (
    <div className='section-block'>
      <SetupNewRunOfAdHocExperiment expId = {this.props.params.expid} sampleId = {this.sampleId} />
    </div>
    );
  }
});


module.exports = connect(null, mapDispatchToProps)(SampleWrapper);
