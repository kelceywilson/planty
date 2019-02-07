import React from "react";
import { connect } from "react-redux";
import { activity } from "../actions";

// sedentary = 1; low active = 2; med active = 3; active = 4
class Activity extends React.Component {
  render() {
    const { active } = this.props.stats;
    const activityLevel = active => {
      switch (active) {
        case 1:
          return "Sedentary";
        case 2:
          return "Low Activity";
        case 3:
          return "Medium Activity";
        case 4:
          return "High Activity";
        default:
          return "Something went wrong. Please reload and try again";
      }
    };
    const activity = (
      <div>
        <div className="ui simple active dropdown">
          Activity Level <i className="dropdown icon" />
          <div className="menu">
            <div className="item" onClick={() => this.props.activity(1)}>
              Sedendary
            </div>
            <div className="item" onClick={() => this.props.activity(2)}>
              Low activity
            </div>
            <div className="item" onClick={() => this.props.activity(3)}>
              Medium activity
            </div>
            <div className="item" onClick={() => this.props.activity(4)}>
              High activity
            </div>
          </div>
        </div>
      </div>
    );

    return <div>{active !== undefined ? activityLevel(active) : activity}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}
export default connect(
  mapStateToProps,
  { activity }
)(Activity);
