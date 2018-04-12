import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { listAllTrips } from '../actions/my_trips_action'

import Trip from '../components/trip'

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
            return <Trip key={trip._id} trip={trip}/>
        })
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
                </div>
                <div className='trip_list'>{this.renderTrips(this.props.myTrips.myTripsFound)}</div>
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
