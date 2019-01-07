import React from 'react'
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap'

const Calculator = () => (
  <Form inline>
    <FormGroup constrolId="formInlineEmail">
      <FormControl type="search" placeholder="enter something" />
    </FormGroup>
    {' '}
    <Button type="submit">
      submit
    </Button>
  </Form>
)

export default Calculator;