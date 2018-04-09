import axios from 'axios'

const FAVOURITES_URL = 'http://localhost:5000/api/countries'

export function getFavourites() {
    return function(dispatch){
        axios.get(`${FAVOURITES_URL}`)
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
        }).then((response) => {
            dispatch({type: 'FAVOURITE_COUNTRY_ADDED', payload: response.data})
        }).catch((err) => {
            dispatch({type: 'FAVOURITE_NOT_ADDED', payload: err})
        })
    }
}

// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });