var React = require('react');
var connect = require('react-redux').connect;
var UserHomeActions = require('../actions/Dashboard.jsx');
var bindActionCreators = require('redux').bindActionCreators;
var NewExperiment = require('./NewExperiment.jsx');
var Link = require('react-router').Link;

// function mapStatetoProps (state) {
//   return {
//     name: state.NewExperiment.get('name'),
//   };
// }

// function mapDispatchtoProps (dispatch) {
//   return {
//     actions: bindActionCreators(CreateExperimentActions, dispatch)
//   };
// }

var Dashboard = React.createClass({

  render: function () {
    return (
      <div>
      <ul>
        <li><Link to="/dashboard/new-experiment">Create New Experiment</Link></li>
      </ul>
      </div>
    );
  }
});




module.exports = Dashboard;
// module.exports = connect(mapStatetoProps, mapDispatchtoProps)(UserHome);
