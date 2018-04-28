import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleDeleteModal, clearTripToDelete, deleteTrip } from '../actions/my_trips_action'

class DeleteModal extends Component {

handleDeleteClicked(){
    this.props.deleteTrip(this.props.myTrips.tripToDelete)
    this.props.toggleDeleteModal()
}

handleCancelClicked(){
    console.log(this.props.myTrips)
    this.props.clearTripToDelete()
    this.props.toggleDeleteModal()
}

    render(){
        if(this.props.myTrips.deleteModalIsShowing){
            return(
                <div className='backdrop'>
                    <div className='delete-modal'>
                        <h2>Are you sure you want to delete this trip?</h2>
                            <div className='modal-button'>
                                <button onClick={this.handleDeleteClicked.bind(this)}>Delete</button>
                                <button onClick={this.handleCancelClicked.bind(this)}>Cancel</button>
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
    return bindActionCreators({ toggleDeleteModal, clearTripToDelete, deleteTrip }, dispatch)
}

export default connect(mapStateToProps ,mapDispatchToProps) (DeleteModal)