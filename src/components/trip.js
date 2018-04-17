import React from 'react'
import moment from 'moment'

const Trip = ({ trip }) => {

    console.log(trip)

    const imgUrl = `http://localhost:5001/${trip.photos[0].filename}`
    console.log(trip.photos[0])
    
    if(trip){
    return (
            <div className='trip_item'>
                <div>
                    <h2>{trip.name}</h2>
                <h3>Dates visited: {moment(trip.startDate).format("MM/DD/YYYY")} - {moment(trip.endDate).format("MM/DD/YYYY")}</h3>
                        <div className='trip_image'>
                            <img src={trip.flag} alt={trip.name}/>
                            <img src={imgUrl} alt={trip.name}/>
                        </div>
                    </div>
                <div className='trip_body'>
                    <p>{trip.description}</p>
                </div> 
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

export default Trip
