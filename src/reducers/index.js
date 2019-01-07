import { combineReducers } from 'redux'
import BMRReducer from './bmr_reducer'

const rootReducer = combineReducers({
  bmr: BMRReducer
});

export default rootReducer
