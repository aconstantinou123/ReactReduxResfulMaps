import { combineReducers } from 'redux'
import countries from './countries_reducer'

const rootReducer = combineReducers({
    countries
})

export default rootReducer