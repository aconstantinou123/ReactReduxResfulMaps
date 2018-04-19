import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { css } from 'glamor';


import { listAllTrips } from '../actions/my_trips_action'

import Trip from '../components/trip'
import { GoogleMapTrips } from '../components/google_map_trips';

class MyTripList extends Component {

componentWillMount(){
    this.props.listAllTrips()
}

componentDidRecieveProps(){
    console.log(this.props.myTrips)
}

componentDidUpdate(prevProps){
    if(this.props.myTrips.myTripsFound.length !== prevProps.myTrips.myTripsFound.length){
        console.log('props changed')
        this.notify()
    }
}

notify(){
    if(this.props.myTrips.tripDeleted){
        toast.info("Trip deleted", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: css({
                background: '#d59563',
                borderRadius: '10px'
            })
        })
     }
}

renderTrips(myTrips){
    if(myTrips.length !== 0){
        return myTrips.map(trip => {
            return <Trip key={trip._id} trip={trip}/>
        })
    }
    else {
        return(
                <h1>Add a holiday to your trips!</h1>
        )
    }
}

    render(){
        return(
            <div>
                 <div className='main-page-link'>
                    <Link to='/'>Home</Link>
                    <Link to='/favourites'>Favourites</Link>
                </div>
                <div className='favourites_title'>
                    <h1>My Trips</h1>
                    <h3>Scroll down to view all your trips</h3>
                </div>
                <div className ='my_trips_map'><GoogleMapTrips myTrips={this.props.myTrips.myTripsFound}/></div>
                <div className='trip_list'>{this.renderTrips(this.props.myTrips.myTripsFound)}</div>
                <ToastContainer hideProgressBar={true} autoClose={3000}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        myTrips: state.myTrips
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ listAllTrips }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTripList)
