const defaultState = {
    myTripsFound: [],
    myTripsNotFound: false,
    modalIsShowing: false,
    tripAdded: null,
}

export default function(state = defaultState, action){
    console.log(action.type)
    switch(action.type){
        case 'GET_ALL_TRIPS':
            return {...state, myTripsFound: action.payload, myTripsNotFound: false}
        case 'TRIPS_NOT_FOUND':
            return {...state, myTripsNotFound: true}
        case 'TOGGLE MODAL':
            return {...state, modalIsShowing: !state.modalIsShowing}
        case 'TRIP ADDED':
            return {...state, tripAdded: true}
        case 'TRIP NOT ADDED':
            return {...state, tripAdded: false}
        default:
            return state
    }
}