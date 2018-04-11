import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { Link } from 'react-router-dom'

import { listAllTrips } from '../actions/my_trips_action'

class MyTripList extends Component {

componentWillMount(){
    this.props.listAllTrips()
}

componentDidRecieveProps(){
    console.log(this.props.myTrips)
}

renderTrips(myTrips){
    if(myTrips){
        return myTrips.map(trip => {
            return <div key={trip._id}>{trip.name}</div>
        })
    }
}

    render(){
        return(
            <div>
                <div className='favourites_title'>
                    <h1>My Trips</h1>
                </div>
                <div>{this.renderTrips(this.props.myTrips.myTripsFound)}</div>
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
