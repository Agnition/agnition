var React = require('react');
var _ = require('underscore');
var Link = require('react-router').Link;



// Made choice to keep rows and table in same file given tight linking..
var ExpRow = React.createClass({
  render: function() {
    var link;
    if(this.props.exp.active) {
      link = (<Link to={'/sample/' + this.props.exp._id + '/adhoc'}>Add Sample Now</Link>);
    } else {
      link = (<Link to={'/dashboard'}>View Results</Link>);
    }
    return (
      <tr className={this.props.type}>
        <td><Link to={'/viewexp/' + this.props.exp._id}>{this.props.exp.name}</Link></td>
        <td>{this.props.exp.hypothesis}</td>
        <td>{link}</td>
      </tr>
    );
  }
});

var Exps = React.createClass({
  render: function() {
    var rows = [];
    _.each(this.props.exps, function(exp) {
      if (exp.active) {
        rows.push(<ExpRow exp={exp} active={true} />);
      } else {
        rows.push(<ExpRow exp={exp} />);
      }
    });
      return (
        <table className="nav-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Hypothesis</th>
              {this.props.active ? <th>Run Now</th> : <th>Results</th>}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
});

module.exports = Exps;
