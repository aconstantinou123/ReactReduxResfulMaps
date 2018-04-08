import React, { Component } from 'react'
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { mapStyling } from '../google_map-styles'

export class GoogleMapContainer extends Component {

    calculateZoom(countryArea){
        if(countryArea > 15000000){
            return 3
        }
        else if(countryArea > 9000000){
            return 4
        }
        else if(countryArea > 2000000){
            return 5
        }
        else if (countryArea > 500000){
            return 6
        }
        else if (countryArea > 100000){
            return 7
        }  
        else {
            return 8
        }
    }

    renderMap(){
        const style = {
            width: '150vh',
            height: '100vh',
            marginLeft: 'auto',
            marginRight: 'auto'
          }
        if(this.props.countryInfo.length !== 0){
        return(
            <div style={style}>
                <Map google={window.google} zoom={this.calculateZoom(this.props.countryInfo.area)}
                 initialCenter={{
                    lat: this.props.countryInfo.latlng[0],
                    lng: this.props.countryInfo.latlng[1]
                  }}
                center={{
                    lat: this.props.countryInfo.latlng[0],
                    lng: this.props.countryInfo.latlng[1]
                }}
          styles={mapStyling}
          ></Map>
            </div>
            )
        } 
        else{
            return <div>Loading...</div>
        }  
    }


    render(){
       return <div className='map_container'>{this.renderMap()}</div>
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA3QI9OmWVduV0Q0JIRKn9woSQDIss4rfk'
})(GoogleMapContainer)

