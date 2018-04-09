import { combineReducers } from 'redux'
import countries from './countries_reducer'
import favourites from './favourites_reducer'

const rootReducer = combineReducers({
    countries,
    favourites
})

export default rootReducer