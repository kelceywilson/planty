import React, { Component } from "react";
import { connect } from "react-redux";
import { d3Calculator } from "../actions";

class D3 extends Component {
  componentDidMount() {
    console.log(this.props.stats);
    const { age } = this.props.stats;

    this.props.d3Calculator(age);
  }
  render() {
    const { d3 } = this.props.stats;
    const rate = () => {
      if (d3 !== undefined) {
        return (
          <div>
            Based on your age and sex, you need {d3}{" "}
            <a href="https://en.wikipedia.org/wiki/International_unit">IU</a> of
            vitamin D3 per day.
          </div>
        );
      }
    };

    return <div>{d3 === undefined ? null : rate()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}

export default connect(
  mapStateToProps,
  { d3Calculator }
)(D3);
