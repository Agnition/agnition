import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import Dashboard from './Dashboard';
import { Link } from 'react-router';
import bindActionCreators from 'redux';
import NewExperiment from '../components/NewExperiment';


// function mapDispatchtoProps (dispatch) {
//   return {
//     actions: bindActionCreators(AppActions, dispatch)
//   };
// }

class App extends Component {

  render() {
    const { pathname } = this.props.location;
    const key = pathname.split('/')[1] || 'root';
    
    return (
      <div>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/new-experiment">NewExperiment</Link></li>
        {React.cloneElement(this.props.children || <div />, { key: key })}
      </div>
    );
  }
}

// App.propTypes = {
//   // Injected by React Redux
//   pushState: PropTypes.func.isRequired,
//   // Injected by React Router
//   children: PropTypes.node
// };
module.exports = App;

// export default connect(mapStateToProps, mapDispatchtoProps)(App);
