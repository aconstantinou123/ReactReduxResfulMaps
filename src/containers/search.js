import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listCountries } from '../actions/country_action'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            countryToSearch: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            countryToSearch: event.target.value
        })
    }

    searchCountry = (event) => {
        event.preventDefault()
        this.props.listCountries(this.state.countryToSearch)
    }

    render(){
        return (
            <div className='search_bar'>
                <div className='title_text'>Search for a country</div>
                <form onSubmit={this.searchCountry}>
                    <input type='text' onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({listCountries}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)