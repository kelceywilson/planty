import React from 'react'
import {Form, ButtonToolbar, ToggleButtonGroup, ToggleButton, Button} from 'react-bootstrap'

const Age = () => (
  <div class='flex-center'>
    <Form inline>
      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options" >
          <ToggleButton value={1}>Male</ToggleButton>
          <ToggleButton value={2}>Female</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
      {' '}
      <Button type="submit">
        submit
      </Button>
    </Form>
  </div>
)

export default Age;