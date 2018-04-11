import { combineReducers } from 'redux'
import countries from './countries_reducer'
import favourites from './favourites_reducer'
import myTrips from './my_trips_reducer'

const rootReducer = combineReducers({
    countries,
    favourites,
    myTrips
})

export default rootReducer