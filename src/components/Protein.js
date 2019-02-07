import React, { Component } from "react";
import { connect } from "react-redux";
import { proteinCalculator } from "../actions";

class Protein extends Component {
  componentDidMount() {
    const { weight, active } = this.props.stats;
    this.props.proteinCalculator(weight, active);
  }
  render() {
    const { protein } = this.props.stats;
    const rate = () => {
      if (protein !== undefined) {
        return (
          <div>
            Based on your weight and activity level, you need {protein} grams of
            protein per day.
          </div>
        );
      }
    };
    return <div>{protein === undefined ? null : rate()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}

export default connect(
  mapStateToProps,
  { proteinCalculator }
)(Protein);
