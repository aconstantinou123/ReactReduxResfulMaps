import axios from 'axios'

const RESTFUL_URL = 'https://restcountries.eu/rest/v2/name'
const ALPHACODE_URL = 'https://restcountries.eu/rest/v2/alpha'

export function listCountries(countryName) {
    return function(dispatch){
        axios.get(`${RESTFUL_URL}/${countryName}`)
        .then((response) => {
            dispatch({type: 'SEARCH_COUNTRY', payload: response.data})
        }).catch((err) => {
                dispatch({type: 'COUNTRY_NOT_FOUND',payload: err})
            })
        }
    }

export function showCountryInfo(alpha2Code){
    return function(dispatch){
        axios.get(`${ALPHACODE_URL}/${alpha2Code}`)
        .then((response) => {
            dispatch({type: 'SHOW_COUNTRY_INFO', payload: response.data})
        }).catch((err) => {
            dispatch({type: 'INFO_NOT_FOUND', payload:err})
        })
    }
}

export function clearCountryInfo(){
    return {
        type: 'CLEAR_COUNTRY_INFO',
        payload: []
    }
}
