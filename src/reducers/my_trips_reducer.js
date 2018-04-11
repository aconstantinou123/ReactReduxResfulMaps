const defaultState = {
    myTripsFound: [],
    myTripsNotFound: false,
}

export default function(state = defaultState, action){
    console.log(action.type)
    switch(action.type){
        case 'GET_ALL_TRIPS':
            return {...state, myTripsFound: action.payload, myTripsNotFound: false}
        case 'TRIPS_NOT_FOUND':
            return {...state, myTripsNotFound: true}
        default:
            return state
    }
}