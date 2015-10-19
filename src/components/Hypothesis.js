// import React from 'react';
// import { PropTypes } from 'react';
// import connect from 'react-redux';
// import HypothesisActions from '../actions/Hypothesis';
// import bindActionCreators from 'redux';

// function mapStatetoProps (state) {
//   return {
//     hypothesis: state.Hypothesis.get('hypothesis'),
//     iv: state.Hypothesis.get('iv'),
//     dv: state.Hypothesis.get('dv')
//   };
// }

// function mapDispatchtoProps (dispatch) {
//   return {
//     actions: bindActionCreators(HypothesisActions, dispatch)
//   };
// }

// const Hypothesis = React.createClass({

//   handleClick: function (event) {

//     this.props.actions.setHypothesis(this.refs.hypothesisInput.value);
//     this.refs.hypothesisInput.value = '';
//     this.props.actions.setInVar(this.refs.inVarInput.value);
//     this.refs.inVarInput.value = '';
//     this.props.actions.setDepVar(this.refs.depVarInput.value);
//     this.refs.depVarInput.value = '';
//   },

//   render: function () {
//     return (
//       <div>
//         <section>
//           <div>
//             Please enter your hypothesis here.
//           </div>
//           <label>hypothesis</label>
//           <input ref="hypothesisInput" type="text" />
//           <label>cause</label>
//           <input ref="inVarInput" type="text" />
//           <label>effect</label>
//           <input ref="depVarInput" type="text" />
//           <button onClick={this.handleClick}>next</button>
//         </section>
//         <section>
//           <p>"Let's rephrase your cause and effect here."</p>
//           <p>"If this doesn't make sense, try to rephrase your causes and effects."</p>  
//           <p>{this.props.hypothesis}</p>
//           <p>Question: How does {this.props.inVar} affect {this.props.depVar}?</p>
//         </section>
//       </div>
//       );
//   }
// });

// module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Hypothesis);

// Hypothesis.propTypes = {
  
//   name : PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string
//   }).isRequired,
//   owner: PropTypes.shape({
//     login: PropTypes.string.isRequired
//   }).isRequired
// };
