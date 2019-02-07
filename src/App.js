import React, { Component } from "react";
import "./App.css";
import { Grid, Jumbotron } from "react-bootstrap";
import Calculator from "./components/Calculator";
// import Sex from './components/Sex'
// import Results from './components/Results'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <Grid>
            <h1>Plenty</h1>
            <p>all the nutrition you need</p>
          </Grid>
        </Jumbotron>
        <Calculator />
      </div>
    );
  }
}

export default App;
