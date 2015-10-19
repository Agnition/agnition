import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
// import { Link } from 'react-router';
import Dashboard from './Dashboard';



class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage();
    e.preventDefault();
  }

  handleChange(nextValue) {
    this.props.pushState(null, `/${nextValue}`);
  }

  renderErrorMessage() {
    const { errorMessage } = this.props;
    if (!errorMessage) {
      return null;
    }
    return (
         <p style={{ backgroundColor: '#e99', padding: 10 }}>
           <b>{errorMessage}</b>
           {' '}
           (<a href="#"
               onClick={this.handleDismissClick}>
             Dismiss
           </a>)
         </p>
       );
  }

  handleChange(nextValue) {
    this.props.pushState(null, `/${nextValue}`);
  }

  render() {
    const { children, inputValue } = this.props;
    return (
      <div>
        <Dashboard value={inputValue}
          onChange={this.handleChange} />
          {this.renderErrorMessage()}
             {children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  pushState: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
    inputValue: state.router.location.pathname.substring(1)
  };
}

export default connect(mapStateToProps, {
  pushState
})(App);
