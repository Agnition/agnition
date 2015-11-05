//reqs...measureValue
var React = require('react');
var _ = require('underscore');
var AnovaUtils = require('../../../../utils/ANOVA');

var AnovaResult = React.createClass({
  render: function() {
    var result = AnovaUtils.rejectNullHypothesis(this.props.samples);
    var className = result ? 'result-text-positive' : 'result-text-negative';
    var message;

    if (result) {
      message = "We think there is likely a relationship in your data";
    } else {
      message = "Based on your results, we don\'t think that there is enough correlation to make any meaningful conclusions.";
    }

    return (
      <section className= 'section-h'>
        <div className={className}>
          <div></div>
          <p>{message}</p>
          <a className="guide-link" href="https://www.youtube.com/watch?v=-yQb_ZJnFXw">More about how we determine this</a>
        </div>
      </section>
    );
  }
});

// export chart
module.exports = AnovaResult;
