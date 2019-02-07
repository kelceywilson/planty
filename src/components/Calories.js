import React, { Component } from "react";
import { connect } from "react-redux";
import { calorieCalculator } from "../actions";

class Calories extends Component {
  componentDidMount() {
    const { bmr, active } = this.props.stats;

    console.log("calories");
    if (bmr !== undefined && active > 0) {
      this.props.calorieCalculator(bmr, active);
    }
  }

  render() {
    const { calories, bmr } = this.props.stats;
    const rate = <div>You need {calories} calories/day</div>;

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
  { calorieCalculator }
)(Calories);
