import { BMR } from '../actions/index'

export default function(state = 0, action){
  // console.log('action received', action)
  switch (action.type) {
  case BMR:
    return action.payload
  default:
    return state
  }
}
