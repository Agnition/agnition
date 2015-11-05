var React = require('react');
var _ = require('underscore');
var SelectableOptions = require('./SelectableOptions');

var SelectNonRandomOptions = React.createClass({
  getSelectableOptions: function () {
    var selectableOptions = [];
    _.each(this.props.indVarIds, function(indVarId) {
      var props = {
        indVarId: indVarId,
        expId: this.props.expId,
        sampleId: this.props.sampleId
      };
      selectableOptions.push(<SelectableOptions {...props}/>);
    }, this);

    return selectableOptions;
  },
  render: function () {
    var selectableOptions = this.getSelectableOptions();
    return (
      <div>
        {selectableOptions}
      </div>
    );
  }
});

module.exports = SelectNonRandomOptions;
