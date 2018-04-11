import axios from 'axios'

const MY_TRIPS_URL = 'http://localhost:5001/api/countries'

export function listAllTrips() {
    return function(dispatch){
        axios.get(`${MY_TRIPS_URL}`)
        .then((response) => {
            dispatch({type: 'GET_ALL_TRIPS', payload: response.data})
        }).catch((err) => {
                dispatch({type: 'TRIPS_NOT_FOUND',payload: err})
            })
        }
    }