import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleGalleryModal } from '../actions/my_trips_action'

class CustomGallery extends Component {

    handleCloseClicked(){
        this.props.clearPhotos()
        this.props.toggleGalleryModal()
    }

    mapPhotos(){
        return this.props.photos.map(photo => {
            return <img key={photo.name} src={photo.src} alt={photo.name}/>
        })
    }

    render(){
        if(this.props.myTrips.galleryModalIsShowing && this.props.photos.length !== 0){
            return(
                <div className='backdrop'>
                    <div className='gallery-modal'>
                        <h2>Gallery</h2>
                            <div className='modal-button'>
                                    <div>
                                        {this.mapPhotos()}
                                    </div>
                                <button onClick={this.handleCloseClicked.bind(this)}>Close</button>
                            </div>
                    </div>
                </div>
                )
        }
        else return null
    }
}

function mapStateToProps(state){
    return {
        myTrips: state.myTrips
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ toggleGalleryModal}, dispatch)
}

export default connect(mapStateToProps ,mapDispatchToProps) (CustomGallery)