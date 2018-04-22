import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DateRange } from 'react-date-range'
import { addToMyTrips, addPhotoToMyTrips } from '../actions/my_trips_action'
import DropzoneComponent from 'react-dropzone-component'
import { ToastContainer, toast } from 'react-toastify'
import { css } from 'glamor';
import '../../node_modules/react-dropzone-component/styles/filepicker.css'
import '../../node_modules/dropzone/dist/min/dropzone.min.css'

class AddToTripsModal extends Component{
  constructor(props){
    super(props)
    this.state = {
      countryName: '',
      startDate: '',
      endDate: '',
      description: '',
      photos: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.submitTrip = this.submitTrip.bind(this)
  }

  handleSelect(range){
    console.log(range);
    this.setState({
      startDate: range.startDate,
      endDate: range.endDate
    })
  }
  
  handleChange(event){
    this.setState({
      description: event.target.value
    })
  }

  notify(){
    toast.info("Added To My Trips!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: css({
            background: '#d59563',
            borderRadius: '10px'
          })
      });
    }

  submitTrip(event){
    event.preventDefault()
    const trip = {
      flag: this.props.countryInfo.flag,
      latlng: this.props.countryInfo.latlng,
      name: this.props.countryInfo.name,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      description: this.state.description,
      photos: this.state.photos
    }
    this.props.addPhotoToMyTrips(trip)
    this.notify()
    this.props.toggleModal()
  }

    render(){ 

      var componentConfig = {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true,
        postUrl: 'null'
       }

    var djsConfig = { autoProcessQueue: false }
    var eventHandlers = { addedfile: (file) => 
      this.setState({
      photos: this.state.photos.concat(file) 
    })}
    console.log(this.state)
     
    if(this.props.myTrips.modalIsShowing){
        return(
        <div className="backdrop">
         <div className="modal" stype={this.props.children}>
            <form>
            <h1>{this.props.countryInfo.name}</h1>
            <h3>Select the dates of your trip</h3>
            <div className='date-range'>
              <DateRange
                onInit={this.handleSelect}
                onChange={this.handleSelect}
                />
              </div>
              <h3>Description of your trip</h3>
              <textarea id="description" rows='10' cols='20' onChange={this.handleChange}></textarea>
              <h3>Pictures</h3>
              <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} />
              <div className='modal-button-div'>
                  <input className='modal-button' type='submit' onClick={this.props.toggleModal} value='Cancel'/>
                  <input className='modal-button' type='submit' onClick={this.submitTrip} value='Add to My Trips'/>
              </div>
            </form>
        </div>
          <ToastContainer hideProgressBar={true} autoClose={3000}/>
      </div>
        )
    }
    else {
      return null
    }
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addToMyTrips, addPhotoToMyTrips }, dispatch)
}

function mapStateToProps(state){
  return {
      countryInfo: state.countries.countryInfo,
      myTrips: state.myTrips
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToTripsModal);