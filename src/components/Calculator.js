import React from "react";
import { connect } from "react-redux";
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
      <div>
        <Sex />
        <Pregnant />
        <Breastfeeding />
        {sex === "Male" || breastfeeding !== undefined ? <Age /> : null}
        {old === true ? <Weight /> : null}
        {weighted === true ? <Height /> : null}
        {high === true ? <Activity /> : null}
        {active > 0 ? <BMR /> : null}
        {bmr > 0 ? <Calories /> : null}
        {calories > 0 ? <Fat /> : null}
        {calories > 0 ? <Protein /> : null}
        {calories > 0 ? <Fiber /> : null}
        {calories > 0 ? <D3 /> : null}
        {calories > 0 ? <Iron /> : null}
        {calories > 0 ? <Zinc /> : null}
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
export default connect(mapStateToProps)(Calculator);
