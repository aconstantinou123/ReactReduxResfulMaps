import axios from 'axios'
import { getAccessToken } from '../utils/AuthService'

const FAVOURITES_URL = 'http://localhost:5000/api/countries'

export function getFavourites() {
    console.log(getAccessToken())
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
        axios.post(`${FAVOURITES_URL}`, {
            alpha3Code: country.alpha3Code,
            area: country.area,
            borders: country.borders,
            flag: country.flag,
            latlng: country.latlng,
            name: country.name,
            nativeName: country.nativeName,
            region: country.region
        }, { headers: { Authorization: `Bearer ${getAccessToken()}` }}).then((response) => {
            dispatch({type: 'FAVOURITE_COUNTRY_ADDED', payload: response.data})
        }).catch((err) => {
            dispatch({type: 'FAVOURITE_COUNTRY_NOT_ADDED', payload: err})
        })
    }
}

export function clearAddedToFavourites(){
    return {
        type: 'FAVOURITE_ADDED_CLEARED'
    }
}