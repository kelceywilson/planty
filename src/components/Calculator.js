import React from 'react'
// import {Form, FormGroup, FormControl, Button} from 'react-bootstrap'
import Results from './Results'
import Age from './Age'
import Height from './Height'
import Sex from './Sex'
import Weight from './Weight'

const Calculator = () => (
  <div>
    <Sex />
    <Age />
    <Weight />
    <Height />
    <Results />
  </div>
)

export default Calculator;