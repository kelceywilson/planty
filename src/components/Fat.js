import React, { Component } from "react";
import { connect } from "react-redux";
import { fatCalculator } from "../actions";

class Fat extends Component {
  componentDidMount() {
    const { calories } = this.props.stats;

    if (calories !== undefined) {
      this.props.fatCalculator(calories);
    }
  }

  render() {
    const { calories, fat } = this.props.stats;
    const rate = () => {
      if (fat !== undefined) {
        return (
          <div>
            The upper limit of fat based on your calorie limit is {fat[0]} or
            less grams saturated fat, and {fat[1]} grams total fat.
          </div>
        );
      }
    };

    return <div>{calories === undefined ? null : rate()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}

export default connect(
  mapStateToProps,
  { fatCalculator }
)(Fat);
