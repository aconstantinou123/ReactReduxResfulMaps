import React, { Component } from 'react'

class AddToTripsModal extends Component{

    render(){
        return(
        <div className="backdrop">
         <div className="modal" stype={this.props.children}>
          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
        )
    }

}

export default AddToTripsModal;