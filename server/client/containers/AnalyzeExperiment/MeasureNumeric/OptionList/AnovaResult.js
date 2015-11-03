//reqs...measureValue
var React = require('react');
var _ = require('underscore');
var AnovaUtils = require('../../../../utils/ANOVA');

var AnovaResult = React.createClass({
  render: function() {
    var result = AnovaUtils.rejectNullHypothesis(this.props.samples);
    if (result) {
      var message = (<div className='result-text-positive'>We think there is likely a relationship in your data.</div>);
    } else {
      var message = (<div className='result-text-negative'>{"Based on your results, we don\'t think that there is enough correlation to make any meaningful conclusions."}</div>);
    }
    return (
      <div>
        {message}
        <a className= 'guide-link' href="https://www.youtube.com/watch?v=-yQb_ZJnFXw">More about one-way ANOVA</a>
      </div>
    );
  }
});

// export chart
module.exports = AnovaResult;
