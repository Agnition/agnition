import React from 'react';
var connect = require('react-redux').connect;

function mapStatetoProps (state) {
  return {
    cause: state.NewExperiment.get('cause'),
    effect: state.NewExperiment.get('effect')
  };
};


var HypothesisCheck = React.createClass({

  reject: function () {

  },

  confirm: function () {

  },

  render: function () {
    return (
      <div>
      <section>
        <p>"Let's rephrase your cause and effect here."</p>
        <p>"If this doesn't make sense, try to rephrase your causes and effects."</p>  
        <p>Here is your hypothesis: {this.props.hypothesis}</p>
        <p>Question: How does {this.props.cause} affect {this.props.effect}?</p>
        <button ref="reject">Redo</button><button ref="confirm">Makes Sense!</button>
      </section>
      <section ref="measures" style={{display: 'none'}}>
        <div>
          <MeasureInput/>
        </div>
      </section>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps)(HypothesisCheck);
