import React, { Component } from "react";
import { connect } from "react-redux";
import { zinCalculator } from "../actions";

class Zinc extends Component {
  componentDidMount() {
    console.log(this.props.stats);
    const { age, sex, pregnant, breastfeeding } = this.props.stats;

    this.props.zinCalculator(age, sex, pregnant, breastfeeding);
  }
  render() {
    const { zinc } = this.props.stats;
    const rate = () => {
      if (zinc !== undefined) {
        return (
          <div>
            Based on your age and sex, you need {zinc} miligrams of zinc per
            day.
          </div>
        );
      }
    };

    return <div>{zinc === undefined ? null : rate()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}

export default connect(
  mapStateToProps,
  { zinCalculator }
)(Zinc);
