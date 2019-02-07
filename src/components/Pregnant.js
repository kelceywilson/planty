import React, { Component } from "react";
import { connect } from "react-redux";
import { isPregnant } from "../actions";

class Pregnant extends Component {
  render() {
    const { pregnant, sex } = this.props.stats;

    const choose = (
      <div>
        Are you pregnant?
        <button onClick={() => this.props.isPregnant(true)}>Yes</button>
        <button onClick={() => this.props.isPregnant(false)}>No</button>
      </div>
    );

    function chooser(status) {
      if (status === undefined) {
        return choose;
      }
      if (status) {
        return "Pregnant: Yes";
      } else {
        return "Pregnant: No";
      }
    }

    return <div>{sex !== "Female" ? null : chooser(pregnant)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}
export default connect(
  mapStateToProps,
  { isPregnant }
)(Pregnant);
