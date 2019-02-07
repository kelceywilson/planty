import React, { Component } from "react";
import { connect } from "react-redux";
import { fiberCalculator } from "../actions";

class Fiber extends Component {
  componentDidMount() {
    const { sex, age } = this.props.stats;

    this.props.fiberCalculator(sex, age);
  }
  render() {
    const { fiber } = this.props.stats;
    const rate = () => {
      if (fiber !== undefined) {
        return (
          <div>
            Based on your age and sex, you need {fiber} grams of fiber per day.
          </div>
        );
      }
    };

    return <div>{fiber === undefined ? null : rate()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}

export default connect(
  mapStateToProps,
  { fiberCalculator }
)(Fiber);
