var React = require('react');

// STATELOGIC some logic here to load store from DB
// ROUTER or pass in through routing...?
// NOTE this is same as open exps -- except for the changing of conclusion with hypothesis
  // and the filtering for inactive exps


// Made choice to keep in same file given tight linking..
var ClosedExpRow = React.createClass({
  render: function() {
    return (
      <tr>
        //expierment name
        <td>{this.props.exp.name}</td> //ROUTER -- make this a link to exp page, passing in the expierment....
        //conclusion
        <td>{this.props.exp.conclusion}</td>
        //dependent var
        <td>{this.props.exp.depVar[0]}</td>
        //independent var
        <td>{this.props.exp.indVar[0]}</td>
        //number of samples taken thus far
        <td>{this.props.exp.depVar[0].samples.length}</td>

      </tr>
    );
  }
});


var ClosedExps = React.createClass({
  render: function() {
    var rows = [];
    // STATE LOGIC -- figure out how to interact with immutable store..
    this.props.myExperiments.filter({function(exp) {
          return !(exp.get('active'));
        }}).forEach(function(exp) {
      rows.push(<ClosedExpRow exp={exp} />)
    });
    return (
      <table className='open-exps'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Conclusion</th>
            <th>Dependent Variable</th>
            <th>Independent Variable</th>
            <th>Samples Taken</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = ClosedExps;