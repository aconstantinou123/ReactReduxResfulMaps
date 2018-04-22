import React, { Component } from 'react'
import moment from 'moment'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteTrip, listAllTrips, toggleDeleteModal, getTripToDeleteID, toggleGalleryModal } from '../actions/my_trips_action'
import CustomGallery from './custom_gallery'

class Trip extends Component {
    constructor(){
        super()
        this.state = ({
            photos: []
        })
    }


    renderGallery(){
        const{
            trip
        } = this.props
        console.log(trip)
        const imgUrls = []
        trip.photos.forEach(photo => {
          return imgUrls.push(
              {
                  src: `http://localhost:5001/${photo.filename}`,
                  name: photo.originalname
               })
       });
        this.setState({
                photos: this.state.photos.concat(imgUrls)
            })
        this.props.toggleGalleryModal();
    }


    handleDeleteClicked(){
        this.props.toggleDeleteModal()
        this.props.getTripToDeleteID(this.props.trip._id)
    }

    clearPhotos(){
        this.setState({
            photos: []
        })
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
                                <p>Click to see your images</p>
                                <img src={imgUrl} alt={trip.name} onClick={this.renderGallery.bind(this)}/>
                             </div>
                        </div>
                    <div className='trip_body'>
                        <p>{trip.description}</p>
                    </div> 
                        <button className='trip-button' onClick={this.handleDeleteClicked.bind(this)}>Delete Trip</button>
                    <CustomGallery clearPhotos={this.clearPhotos.bind(this)} photos={this.state.photos}/>
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

function mapStateToProps(state){
    return {
        myTrips: state.myTrips
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ toggleGalleryModal, deleteTrip, listAllTrips, toggleDeleteModal, getTripToDeleteID }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
