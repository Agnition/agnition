var React = require('react');
var $ = require('jquery');
var connect = require('react-redux').connect;
var unNormalize = require('../../utils/un-normalize');
var stateToNorm = require('../../utils/stateToNorm');
var schema = require('../../utils/schema');
var filterData = require('../../utils/normalDataFilter');

var NewExperimentActions = require('../../actions/NewExperiment');
var bindActionCreators = require('redux').bindActionCreators;

function mapStatetoProps (state, ownProps) {
  return {
    userId: state.User.get('id')
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var SubmitExperiment = React.createClass({

  handleClick: function () {
    var state = store.getState();
    var normalState = stateToNorm(state);
    var data = filterData(normalState.entities, 'experiments', this.props.expId);
    var userId = this.props.userId;
    var url = '/users/' + userId + '/experiments/';
    $.post(url, data, function (data) {
      console.log(data);
    });
  },

  render: function () {
    return (
      <div>
        <button ref="submitExperiment" onClick={this.handleClick}>Save Experiment</button>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(SubmitExperiment);
