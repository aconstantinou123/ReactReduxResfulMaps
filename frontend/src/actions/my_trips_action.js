import axios from 'axios'
import { getAccessToken } from '../utils/AuthService'

const MY_TRIPS_URL = 'http://localhost/mytripsdb/api/countries'

export function listAllTrips() {
    return function(dispatch){
        axios.get(`${MY_TRIPS_URL}`, { headers: { Authorization: `Bearer ${getAccessToken()}` }})
        .then((response) => {
            dispatch({type: 'GET_ALL_TRIPS', payload: response.data})
        }).catch((err) => {
                dispatch({type: 'TRIPS_NOT_FOUND',payload: err})
            })
        }
    }

    export function deleteTrip(trip){
        const photoFilenames = []
        trip.photos.forEach(function(photo){
            photoFilenames.push(photo.filename)
        })
        return function(dispatch){
            axios.delete(`${MY_TRIPS_URL}`, { headers: { Authorization: `Bearer ${getAccessToken()}` }, params: { id: trip._id, photos: photoFilenames}})
            .then(response => {
                dispatch(listAllTrips())
                dispatch({type: 'TRIP_DELETED'})
            }).catch((err) =>{
                dispatch({type: 'TRIP_NOT_DELETED'})
                console.log(err)
            })
        }
    }

    export function addPhotoToMyTrips(trip){
        return function(dispatch){
            const data = new FormData();
            data.append('flag', trip.flag)
            data.append('latlng', trip.latlng)
            data.append('name', trip.name);
            trip.photos.forEach(photo => {
                data.append('tripPictures', photo);
            });
            data.append('startDate', trip.startDate)
            data.append('endDate', trip.endDate)
            data.append('description', trip.description)
            axios.post(`${MY_TRIPS_URL}/files`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                     Authorization: `Bearer ${getAccessToken()}`}
                }
            ).then((response) => {
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
        type: "TOGGLE_MODAL",
    }
}

export function toggleDeleteModal(){
    return {
        type: 'TOGGLE_DELETE_MODAL'
    }
}

export function toggleGalleryModal(){
    return {
        type: 'TOGGLE_GALLERY_MODAL'
    }
}

export function getTripToDelete(trip){
    return {
        type: 'TRIP_TO_DELETE_SELECTED',
        payload: trip
    }
}

export function clearTripToDelete(){
    return{
        type: 'TRIP_TO_DELETE_CLEARED',
        payload: null
    }
}