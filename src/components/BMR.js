import React, { Component } from "react";
import { connect } from "react-redux";
import { bmrCalculator } from "../actions";

class BMR extends Component {
  componentDidMount() {
    const { sex, weight, height, age } = this.props.stats;

    if (sex !== undefined && weight > 0 && height > 0 && age > 0) {
      this.props.bmrCalculator(sex, weight, height, age);
    }
  }

  render() {
    const { bmr } = this.props.stats;
    const rate = (
      <div>
        Your{" "}
        <a href="https://en.wikipedia.org/wiki/Basal_metabolic_rate">
          Basal Metabolic Rate
        </a>{" "}
        (BMR) is {bmr} calories/day
      </div>
    );

    return <div>{bmr === undefined ? null : rate}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}

export default connect(
  mapStateToProps,
  { bmrCalculator }
)(BMR);
