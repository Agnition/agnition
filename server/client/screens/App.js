import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { Link } from 'react-router';
import Dashboard from './Dashboard';
import TopNav from '../components/TopNav';

class App extends Component {

  render() {
    const { pathname } = this.props.location;
    const key = pathname.split('/')[1] || 'root';

    return (
      <div>
        <TopNav />
        {React.cloneElement(this.props.children || <div />, { key: key })}
      </div>
    );
  }
}

// App.propTypes = {
//   // Injected by React Redux
//   errorMessage: PropTypes.string,
//   resetErrorMessage: PropTypes.func.isRequired,
//   pushState: PropTypes.func.isRequired,
//   inputValue: PropTypes.string.isRequired,
//   // Injected by React Router
//   children: PropTypes.node
// };

module.exports = App;
