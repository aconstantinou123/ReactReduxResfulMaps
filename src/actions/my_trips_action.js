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

    export function deleteTrip(tripId){
        return function(dispatch){
            axios.delete(`${MY_TRIPS_URL}`, {params: { id: tripId }})
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

export function getTripToDeleteID(id){
    return {
        type: 'TRIP_TO_DELETE_SELECTED',
        payload: id
    }
}

export function clearTripToDeleteID(){
    return{
        type: 'TRIP_TO_DELETE_CLEARED',
        payload: null
    }
}