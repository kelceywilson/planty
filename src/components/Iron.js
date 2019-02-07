import React, { Component } from "react";
import { connect } from "react-redux";
import { ironCalculator } from "../actions";

class Iron extends Component {
  componentDidMount() {
    console.log(this.props.stats);
    const { age, sex } = this.props.stats;

    this.props.ironCalculator(age, sex);
  }
  render() {
    const { iron } = this.props.stats;
    const rate = () => {
      if (iron !== undefined) {
        return (
          <div>
            Based on your age and sex, you need {iron} miligrams of iron per
            day.
          </div>
        );
      }
    };

    return <div>{iron === undefined ? null : rate()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}

export default connect(
  mapStateToProps,
  { ironCalculator }
)(Iron);
