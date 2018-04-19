const defaultState = {
    myTripsFound: [],
    myTripsNotFound: false,
    modalIsShowing: false,
    tripAdded: null,
    tripDeleted: false
}

export default function(state = defaultState, action){
    console.log(action.type)
    switch(action.type){
        case 'GET_ALL_TRIPS':
            return {...state, myTripsFound: action.payload, myTripsNotFound: false}
        case 'TRIPS_NOT_FOUND':
            return {...state, myTripsNotFound: true}
        case 'TOGGLE_MODAL':
            return {...state, modalIsShowing: !state.modalIsShowing}
        case 'TRIP_ADDED':
            return {...state, tripAdded: true}
        case 'TRIP_NOT_ADDED':
            return {...state, tripAdded: false}
        case 'TRIP_DELETED':
            return {...state, tripDeleted: true}
        case 'TRIP_NOT_DELETED':
            return {...state}
        default:
            return state
    }
}