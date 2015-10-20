var React = require('react');
var _ = require('underscore');
var Link = require('react-router').Link;


// Made choice to keep rows and table in same file given tight linking..
var ExpRow = React.createClass({
  render: function() {
    return (
      <tr className={this.props.type}>
        <td><Link to={'/viewexp/' + this.props.exp._id}>{this.props.exp.name}</Link></td> 
        <td> {this.props.exp.hypothesis} </td>
        <td> {this.props.exp.conclusion} </td>
      </tr>
    );
  }
});

var Exps = React.createClass({
  render: function() {
    var rows = [];
    _.each(this.props.exps, function(exp) {
      if(exp.active) {
        rows.push(<ExpRow exp={exp} type='exp-row open' />)
      } else {
        rows.push(<ExpRow exp={exp} type='exp-row closed' />)  
      }
    });
      return (
        <table className='exps-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hypothesis</th>
              <th>Conclusion</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
});

module.exports = Exps;
