import React, { Component } from "react";
import { connect } from "react-redux";
import { chooseSex } from "../actions";

class Sex extends Component {
  render() {
    const { sex } = this.props.stats;
    const choose = (
      <div>
        <button onClick={() => this.props.chooseSex("Male")}>Male?</button>
        <button onClick={() => this.props.chooseSex("Female")}>Female?</button>
      </div>
    );
    const chosen = <div>{sex}</div>;
    return <div>{sex === undefined ? choose : chosen}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}
export default connect(
  mapStateToProps,
  { chooseSex }
)(Sex);
