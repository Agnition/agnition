var React = require('react');

// STATELOGIC some logic here to load store from DB
// ROUTER or pass in through routing...?


// Made choice to keep rows and table in same file given tight linking..
var ExpRow = React.createClass({
  render: function() {
    return (
      <tr class=this.props.type>
        <td>{this.props.exp.name}</td> 
        {/* //ROUTER -- make this a link to exp page, passing in the expierment.... */}
        <td>{this.props.exp.hypothesis}</td>
        <td>{this.props.exp.conclusion}</td>
        <td>{this.props.exp.depVar[0]}</td>
        <td>{this.props.exp.indVar[0]}</td>
        {/* //number of samples taken thus far */}
        <td>{this.props.exp.depVar[0].samples.length}</td>
      </tr>
    );
  }
});


var Exps = React.createClass({
  render: function() {
    var rows = [];
    this.props.exps.forEach(function(exp,i) {
      if(exp.active) {
        rows.push(<ExpRow exp={exp} key={i} type='exp-row open' />)
      } else {
        rows.push(<ExpRow exp={exp} key={i} type='exp-row closed' />)  
      }
    });

      return (
        <table className='exps-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hypothesis</th>
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

module.exports = Exps;
