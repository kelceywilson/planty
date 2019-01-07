import React, { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {

  render(){
    return (
      <div>
        results
      </div>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned from here will show up as
  //  this.props inside of this Component
  //  this is the glue between react & redux
  return {
    sex: state.sex,
    age: state.sex,
    weight: state.sex,
    height: state.sex,
  };
}

export default connect(
  mapStateToProps,
  null
)(Results);