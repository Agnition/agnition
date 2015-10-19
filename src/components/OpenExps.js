var React = require('react');
var About = require('./About.jsx');
var Signin = require('./Signin.jsx');
var Hypothesis = require('./Hypothesis');

// STATELOGIC some logic here to load store from DB
// ROUTER or pass in through routing...?


// Made choice to keep in same file given tight linking..
var OpenExpRow = React.createClass({
  render: function() {
    return (
      <tr>
        //expierment name
        <td>{this.props.exp.name}</td> //ROUTER -- make this a link to exp page, passing in the expierment....
        //hypothesis
        <td>{this.props.exp.hypothesis}</td>
        //dependent var
        <td>{this.props.exp.depVar[0].name}</td>
        //independent var
        <td>{this.props.exp.indVar[0].name}</td>
        //number of samples taken thus far
        <td>{this.props.exp.depVar[0].samples.length}</td>
        
        // <EditExp exp = {this.props.exp} key={this.props.key}>

      </tr>
    );
  }
});


var OpenExps = React.createClass({
  render: function() {
    var rows = [];
    // STATE LOGIC -- figure out how to interact with immutable store..
    this.props.openExps.forEach(function(exp,i) {
      rows.push(<OpenExpRow exp={exp} key={i} />)
    });
    
    return (
      <table className='exps open-exps'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hypothesis</th>
            <th>Dependent Variable</th>
            <th>Independent Variable</th>
            <th>Samples Taken</th>
            // <th>Edit Exp</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = OpenExps;