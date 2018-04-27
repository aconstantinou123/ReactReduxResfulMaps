const defaultState = {
    myTripsFound: [],
    myTripsNotFound: false,
    modalIsShowing: false,
    tripAdded: null,
    tripDeleted: false,
    deleteModalIsShowing: false,
    galleryModalIsShowing: false,
    tripToDeleteID: null
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
        case 'TOGGLE_DELETE_MODAL':
            return {...state, deleteModalIsShowing: !state.deleteModalIsShowing}
        case 'TRIP_TO_DELETE_SELECTED':
            return {...state, tripToDeleteID: action.payload}
        case 'TRIP_TO_DELETE_CLEARED':
            return {...state, tripToDeleteID: action.payload}
        case 'TOGGLE_GALLERY_MODAL':
            return {...state, galleryModalIsShowing: !state.galleryModalIsShowing}
        default:
            return state
    }
}