import React from "react";
import { connect } from "react-redux";
import { aged, ager } from "../actions";

class Age extends React.Component {
  componentDidMount() {
    this.ageInput.focus();
  }
  render() {
    const { age, old } = this.props.stats;

    const years = (
      <div>
        <p>Age: {age} years</p>
      </div>
    );
    const ageless = (
      <div>
        <form>
          <label>Age</label>
          <input
            onChange={e => this.props.ager(e.target.value)}
            type="number"
            placeholder="in years?"
            ref={input => {
              this.ageInput = input;
            }}
          />
          <button
            type="submit"
            onClick={e => {
              e.preventDefault();
              this.props.aged();
            }}
          >
            submit
          </button>
        </form>
      </div>
    );

    return <div>{old === true ? years : ageless}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}
export default connect(
  mapStateToProps,
  { aged, ager }
)(Age);
