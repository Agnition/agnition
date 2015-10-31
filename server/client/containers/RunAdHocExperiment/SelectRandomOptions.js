var React = require('react');
var _ = require('underscore');
var ChosenOption = require('./ChosenOption');

// var mapStateToProps = function (state, ownProps) {
//   return {
//     options : state.IndVars.get(ownProps.indVarId).toJS().options,
//     name : state.IndVars.get(ownProps.indVarId).toJS().name
//   };
// };

var SelectRandomOptions = React.createClass({
  getChosenOptions: function () {
    return _.map(this.props.indVarIds, function(indVarId) {
      var props = {
        indVarId: indVarId,
        sampleId: this.props.sampleId,
        expId: this.props.expId
      };
      return (<ChosenOption {...props}/>);
    }.bind(this));
  },
  render: function () {
    var chosenOptions = this.getChosenOptions();
    return (
      <div>
        {chosenOptions}
      </div>
    );
  }
});

module.exports = SelectRandomOptions;
