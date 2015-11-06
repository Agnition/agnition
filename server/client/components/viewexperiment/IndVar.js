
var utils = require('../../utils/componentUtils');
var React = require('react');
var connect = require('react-redux').connect;


function mapStateToProps (state, ownProps) {
  return {
    indVars: utils.mapIdsToObjs(ownProps.indVars, state.IndVars),
  };
}


var Options = React.createClass({
  render: function() {
    var options = this.props.options.map(function(option, i) {
      i++; //start at option 1
      return(
        <div className= 'definition-set'>
          <span className='definition-label'>{i}</span>
          <span className='definition'>{option}</span>
        </div>
        )
    });
    return (
      <div>
        {options}
      </div>
    );
  }
});

var IndVar = React.createClass({
  render: function() {
    return (
      <div>
        <Options options = {this.props.indVar.options}/>
      </div>
    );
  }
});

var IndVars = React.createClass({
  render: function() {
    return utils.divCollection(this.props.indVars, IndVar, 'indVar');
  }
});

module.exports = connect(mapStateToProps)(IndVars);
