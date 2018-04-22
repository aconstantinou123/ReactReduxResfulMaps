import React, { Component } from 'react'
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { mapStyling } from '../google_map-styles'

export class GoogleMapTrips extends Component {

    renderMarker(myTrips){
        return myTrips.map(trip => {
            const latlngArray = trip.latlng.split(',').map(Number)
            return <Marker key={trip._id}
                position={{lat: latlngArray[0], lng: latlngArray[1]}}
               />
        })
    }
    
    renderMap(){
        const style = {
            width: '150vh',
            height: '100vh'
          }
        return(
            <div style={style}>
                <div className='map-title'>
                    <h1>See where you've visited</h1>
                </div>
                <Map google={window.google} zoom={2.1}
                 initialCenter={{
                    lat: 45.5074,
                    lng: -0.1278
                  }}
                styles={mapStyling}>
                {this.renderMarker(this.props.myTrips)}
                 </Map>
            </div>
            )
        } 
    


    render(){
       return <div className='map_container'>{this.renderMap()}</div>
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA3QI9OmWVduV0Q0JIRKn9woSQDIss4rfk'
})(GoogleMapTrips)

