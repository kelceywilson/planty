import React from "react";
import { connect } from "react-redux";
import { weigher, weighed } from "../actions";

class Weight extends React.Component {
  componentDidMount() {
    this.weightInput.focus();
  }
  render() {
    const { weighted, weight } = this.props.stats;

    const pounds = (
      <div>
        <p>Weight: {weight} lbs</p>
      </div>
    );
    const weightless = (
      <div>
        <form>
          <label>Weight </label>
          <input
            onChange={e => this.props.weigher(e.target.value)}
            type="number"
            placeholder="in pounds?"
            ref={input => {
              this.weightInput = input;
            }}
          />
          <button
            onClick={e => {
              e.preventDefault();
              this.props.weighed();
            }}
          >
            submit
          </button>
        </form>
      </div>
    );

    return <div>{weighted === true ? pounds : weightless}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}
export default connect(
  mapStateToProps,
  { weigher, weighed }
)(Weight);
