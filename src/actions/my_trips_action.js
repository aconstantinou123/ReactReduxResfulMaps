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

    export function addToMyTrips(trip){
        return function(dispatch){
            axios.post(`${MY_TRIPS_URL}`, {
                flag: trip.flag,
                latlng: trip.latlng,
                name: trip.name,
                startDate: trip.startDate,
                endDate: trip.endDate,
                description: trip.description,
                photos: trip.photos
            }).then((response) => {
                dispatch({type: 'TRIP_ADDED', payload: response.data})
            }).catch((err) => {
                dispatch({type: 'TRIP_NOT_ADDED', payload: err})
            })
        }
    }

export function toggleModalOpen(){
    return {
        type: "TOGGLE MODAL",
    }
}