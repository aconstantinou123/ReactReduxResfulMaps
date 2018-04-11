const defaultState = {
    countriesFound: [],
    countryNotFound: false,
    countryInfo: []
}

export default function(state = defaultState, action){
    switch(action.type){
        case 'SEARCH_COUNTRY':
            return {...state, countriesFound: action.payload, countryNotFound: false}
        case 'COUNTRY_NOT_FOUND':
            return {...state, countriesFound: [], countryNotFound: true}
        case 'SHOW_COUNTRY_INFO':
            return {...state, countryInfo: action.payload}
        case 'INFO_NOT_FOUND':
            return {...state, countryNotFound: true}
        case 'CLEAR_COUNTRY_INFO':
            return {...state, countryInfo: action.payload}
        default:
            return state
    }
}