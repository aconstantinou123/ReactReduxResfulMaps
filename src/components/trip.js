import React, { Component } from 'react'
import moment from 'moment'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteTrip, listAllTrips } from '../actions/my_trips_action'

class Trip extends Component {

    handleDeleteClicked(){
        this.props.deleteTrip(this.props.trip._id)
    }
    
    render(){

        const{
            trip
        } = this.props

        const imgUrl = `http://localhost:5001/${trip.photos[0].filename}`

        if(trip){
        return (
                <div className='trip_item'>
                    <div>
                        <h2>{trip.name}</h2>
                    <h3>Dates visited: {moment(trip.startDate).format("MM/DD/YYYY")} - {moment(trip.endDate).format("MM/DD/YYYY")}</h3>
                            <div className='trip_image'>
                                <img src={imgUrl} alt={trip.name}/>
                            </div>
                        </div>
                    <div className='trip_body'>
                        <p>{trip.description}</p>
                    </div> 
                        <button className='trip-button' onClick={this.handleDeleteClicked.bind(this)}>Delete Trip</button>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h2>Add to your trips</h2>
                </div>
            )
        }
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ deleteTrip, listAllTrips }, dispatch)
}

export default connect(null, mapDispatchToProps)(Trip)
