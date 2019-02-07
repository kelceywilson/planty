import React from "react";
import { connect } from "react-redux";
import { heighter, higher } from "../actions";

class Height extends React.Component {
  componentDidMount() {
    this.heightInput.focus();
  }
  render() {
    const { high, height } = this.props.stats;

    const inches = (
      <div>
        <p>Height: {height} inches</p>
      </div>
    );
    const heightless = (
      <div>
        <form>
          <label>Height </label>
          <input
            onChange={e => {
              if (e && e.keyCode === 13) {
                this.props.higher();
              }
              this.props.heighter(e.target.value);
            }}
            type="number"
            placeholder="in inches?"
            ref={input => {
              this.heightInput = input;
            }}
          />
          <button
            onClick={e => {
              e.preventDefault();
              this.props.higher();
            }}
          >
            submit
          </button>
        </form>
      </div>
    );

    return <div>{high === true ? inches : heightless}</div>;
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  };
}
export default connect(
  mapStateToProps,
  { heighter, higher }
)(Height);
