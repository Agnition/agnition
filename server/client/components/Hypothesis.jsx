'use strict';

var React = require('react');

var Hypothesis = React.createClass({
  render: function () {
    return (
      <div>
        <section>
          <div>
            Please enter your hypothesis here.
          </div>
          <label>hypothesis</label>
          <input type="text" name="hypothesis" />
          <label>cause</label>
          <input type="text" name="cause" />
          <label>effect</label>
          <input type="text" name="effect" />
        </section>
      </div>
      );
  }
});

module.exports = Hypothesis;