const defaultState = {
    favouriteCountries: [],
    favouritesNotFound: false,
}

export default function(state = defaultState, action){
    console.log(action.payload)
    switch(action.type){
        case 'GET_ALL_FAVOURITES':
            return {...state, favouriteCountries: action.payload, favouritesNotFound: false}
        case 'FAVOURITES_NOT_FOUND':
            return {...state, favouriteCountries: [], favouritesNotFound: true}
        case 'FAVOURITE_COUNTRY_ADDED':
            return {...state}
        default:
            return state
    }
}