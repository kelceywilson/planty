import React from "react";
import { connect } from "react-redux";
import { reset } from "../actions";
import BMR from "./BMR";
import Age from "./Age";
import Activity from "./Activity";
import Breastfeeding from "./Breastfeeding";
import Calories from "./Calories";
import D3 from "./D3";
import Fat from "./Fat";
import Fiber from "./Fiber";
import Height from "./Height";
import Iron from "./Iron";
import Pregnant from "./Pregnant";
import Protein from "./Protein";
import Sex from "./Sex";
import Weight from "./Weight";
import Zinc from "./Zinc";

class Calculator extends React.Component {
  render() {
    const {
      active,
      breastfeeding,
      bmr,
      calories,
      high,
      old,
      sex,
      weighted
    } = this.props.stats;

    console.log(this.props.stats);

    const components = (
      <div className="grid">
        <Sex />
        <Pregnant />
        <Breastfeeding />
        {sex === "Male" || breastfeeding !== undefined ? <Age /> : null}
        {old === true ? <Weight /> : null}
        {weighted === true ? <Height /> : null}
        {high === true ? <Activity /> : null}
        {active > 0 ? <BMR /> : null}
        {bmr > 0 ? <Calories /> : null}
        {calories > 0 ? (
          <div>
            <Fat />
            <Protein />
            <Fiber />
            <D3 />
            <Iron />
            <Zinc />
          </div>
        ) : null}
        <button onClick={() => this.props.reset()}>Reset</button>
      </div>
    );
    return <div>{components}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}
export default connect(
  mapStateToProps,
  { reset }
)(Calculator);
