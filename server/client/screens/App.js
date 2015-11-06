var React = require('react');
var Component = require('react').Component;
var TopNav = require('../components/TopNav');
var MyExps = require('../components/myexperiments/MyExperiments.js')

class App extends Component {

  render() {
    const { pathname } = this.props.location;
    const key = pathname.split('/')[1] || 'root';

    return (
      <div>
        <TopNav />
        {React.cloneElement(this.props.children || < MyExps/>, { key: key })}
      </div>
    );
  }
}

module.exports = App;
