import React, { Component } from 'react';
import './App.css';
import {Grid, Jumbotron} from 'react-bootstrap'
import { Provider } from "react-redux";
import store from "./store";
import Calculator from './components/Calculator'
// import Sex from './components/Sex'
// import Results from './components/Results'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Jumbotron>
          <Grid>
            <h1>Plenty</h1>
            <p>Eat plants</p>
          </Grid>
        </Jumbotron>
        <Calculator />
      </div>
      </Provider>
    );
  }
}

export default App;