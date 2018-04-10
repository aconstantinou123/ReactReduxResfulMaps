const defaultState = {
    favouriteCountries: [],
    favouritesNotFound: false,
    favouriteAdded: null,
}

export default function(state = defaultState, action){
    console.log(action.payload)
    switch(action.type){
        case 'GET_ALL_FAVOURITES':
            return {...state, favouriteCountries: action.payload, favouritesNotFound: false}
        case 'FAVOURITE_COUNTRY_NOT_ADDED':
            return {...state, favouriteAdded: false}
        case 'FAVOURITE_COUNTRY_ADDED':
            return {...state, favouriteAdded: true}
        case 'FAVOURITE_ADDED_CLEARED':
            return {...state, favouriteAdded: null}
        default:
            return state
    }
}