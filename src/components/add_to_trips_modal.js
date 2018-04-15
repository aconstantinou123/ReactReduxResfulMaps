import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DateRange } from 'react-date-range';
import { addToMyTrips } from '../actions/my_trips_action'

class AddToTripsModal extends Component{
  constructor(props){
    super(props)
    this.state = {
      countryName: '',
      startDate: '',
      endDate: '',
      description: '',
      photos: ''
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
    this.props.addToMyTrips(trip)
    this.props.toggleModal()
  }

    render(){ 
    if(this.props.myTrips.modalIsShowing){
        return(
        <div className="backdrop">
         <div className="modal" stype={this.props.children}>
          <div className="footer">
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
              <div className='modal-button-div'>
                  <input className='modal-button' type='submit' onClick={this.props.toggleModal} value='Cancel'/>
                  <input className='modal-button' type='submit' onClick={this.submitTrip} value='Add to 
                  Favourites'/>
              </div>
            </form>
          </div>
        </div>
      </div>
        )
    }
    else {
      return null
    }
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addToMyTrips }, dispatch)
}

function mapStateToProps(state){
  return {
      countryInfo: state.countries.countryInfo,
      myTrips: state.myTrips
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToTripsModal);