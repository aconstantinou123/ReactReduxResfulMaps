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

    export function addPhotoToMyTrips(trip){
        return function(dispatch){
            const data = new FormData();
            data.append('flag', trip.flag)
            data.append('latlng', trip.latlng)
            data.append('name', trip.name);
            data.append('tripPicture', trip.photos[0]);
            data.append('startDate', trip.startDate)
            data.append('endDate', trip.endDate)
            data.append('description', trip.description)
            axios.post(`${MY_TRIPS_URL}/files`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',}
                }).then((response) => {
                console.log(data)
            dispatch({type: 'TRIP_PHOTO_ADDED', payload: response.data})
                    }).catch((err) => {
                dispatch({type: 'TRIP_PHOTO_NOT_ADDED', payload: err})
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