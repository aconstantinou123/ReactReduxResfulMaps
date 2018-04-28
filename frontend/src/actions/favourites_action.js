import axios from 'axios'
import { getAccessToken } from '../utils/AuthService'

const FAVOURITES_URL = 'http://localhost:5000/api/countries'

export function getFavourites() {
    return function(dispatch){
        axios.get(`${FAVOURITES_URL}`, { headers: { Authorization: `Bearer ${getAccessToken()}` }})
        .then((response) => {
            dispatch({type: 'GET_ALL_FAVOURITES', payload: response.data})
        }).catch((err) => {
                dispatch({type: 'FAVOURITES_NOT_FOUND',payload: err})
            })
        }
    }

export function addToFavourites(country){
    return function(dispatch){
        axios.post(`${FAVOURITES_URL}`, country, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then((response) => {
            dispatch({type: 'FAVOURITE_COUNTRY_ADDED', payload: response.data})
        }).catch((err) => {
            dispatch({type: 'FAVOURITE_COUNTRY_NOT_ADDED', payload: err})
        })
    }
}

export function deleteFavourite(countryId){
    return function(dispatch){
        axios.delete(`${FAVOURITES_URL}`, { headers: { Authorization: `Bearer ${getAccessToken()}` },params: {id: countryId}})
        .then(response => {
            dispatch(getFavourites())
            dispatch({type: 'FAVOURITE_DELETED'})
        })
        .catch( err => {
            dispatch({type: 'FAVOURITE_NOT_DELETED'})
            console.log(err)
        })
    }
}

export function clearAddedToFavourites(){
    return {
        type: 'FAVOURITE_ADDED_CLEARED'
    }
}