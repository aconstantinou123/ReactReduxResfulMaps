import React from 'react'

const Trip = ({ trip }) => {

    console.log(trip)
    
    return (
        <div className='trip_item'>
            <div>
                <h2>{trip.name}</h2>
            <h3>{trip.dates}</h3>
                    <div className='trip_image'>
                        <img src={trip.flag} alt={trip.name}/>
                    </div>
                </div>
            <div className='trip_body'>
                 <p>{trip.description}</p>
            </div> 
        </div>
    )
}

export default Trip
