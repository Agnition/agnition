// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;

var bindActionCreators = require('redux').bindActionCreators;

var MeasureQualitative = require('./MeasureQualitative');
var MeasureList = require('./MeasureList');
var MeasureNumeric = require('./MeasureNumeric');

// import actions
var MeasureActions = require('../../actions/Measures');
// var Actions = _.extend(MeasureActions);

function mapStatetoProps (state, ownProps) {
  return {
    kind: state.Measures.getIn([ownProps.measureId, 'kind'])
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(MeasureActions, dispatch)
  };
}

var Measure = React.createClass({

  componentDidMount: function() {
    this.checkValidity();
  },

  checkValidity: function() {
    if (this.props.kind !== 'qualitative' && this.props.kind !== 'list' && this.props.kind !== 'numeric') {
      this.props.actions.setValidity(false);
    }
  },

  handleClick: function (event) {
    this.props.actions.setKind(event.target.value, this.props.measureId);
  },

  render: function () {
    var measureKinds = {
      qualitative: (<MeasureQualitative
                    key={this.props.measureId}
                    measureId={this.props.measureId} />),
      numeric: (<MeasureNumeric
                key={this.props.measureId}
                measureId={this.props.measureId} />),
      list: (<MeasureList
             key={this.props.measureId}
             measureId={this.props.measureId} />)
    };
    return (
      <div>
        {this.props.kind === 'qualitative'
        ? <button className="select-button active" value="qualitative" onClick={this.handleClick}>scale</button>
        : <button className="select-button" value="qualitative" onClick={this.handleClick}>scale</button>
        }
        {this.props.kind === 'numeric'
        ? <button className="select-button active" value="numeric" onClick={this.handleClick}>number</button>
        : <button className="select-button" value="numeric" onClick={this.handleClick}>number</button>
        }
        {this.props.kind === 'list'
        ? <button className="select-button active" value="list" onClick={this.handleClick}>categorical</button>
        : <button className="select-button" value="list" onClick={this.handleClick}>categorical</button>
        }
        {this.props.kind !== undefined
        ? measureKinds[this.props.kind]
        : null
        }
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Measure);
