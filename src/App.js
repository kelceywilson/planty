import React, { Component } from 'react';
import './App.css';
import {Grid, Jumbotron} from 'react-bootstrap'
import Calculator from './components/Calculator'
import Results from './components/Results'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <Grid>
            <h1>Plenty</h1>
            <p>Eat plants</p>
            <Calculator />
            <Results />
          </Grid>
        </Jumbotron>;
      </div>
    );
  }
}

export default App;