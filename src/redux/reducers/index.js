import { combinerReducers } from 'redux'
import courses from './courseReducer'

const rootReducer = combinerReducers({
  courses
})

export default rootReducer