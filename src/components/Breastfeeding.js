import React, { Component } from "react";
import { connect } from "react-redux";
import { isBreastfeeding } from "../actions";

class Breastfeeding extends Component {
  render() {
    const { breastfeeding, pregnant } = this.props.stats;

    const choose = (
      <div>
        Are you breastfeeding?
        <button onClick={() => this.props.isBreastfeeding(true)}>Yes</button>
        <button onClick={() => this.props.isBreastfeeding(false)}>No</button>
      </div>
    );
    function chooser(status) {
      if (status === undefined) {
        return choose;
      }
      if (status) {
        return "Breastfeeding: Yes";
      } else {
        return "Breastfeeding: No";
      }
    }

    return <div>{pregnant === undefined ? null : chooser(breastfeeding)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}
export default connect(
  mapStateToProps,
  { isBreastfeeding }
)(Breastfeeding);
