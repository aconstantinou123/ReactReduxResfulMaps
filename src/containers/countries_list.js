import React, { Component } from 'react'
import { connect } from 'react-redux'
import Country from '../components/country';

class CountriesList extends Component {

    mappedCountries = (countries) => {
        if(this.props.countries.countryNotFound === true){
            return <div className='country_not_found'>Country not found!</div>
        }
        else {
            return countries.map(country => {
                return (
                   <Country key={country.alpha2Code} country={country}/>
                )
            })
        }
    }

    render(){
           return(
            <div>
                <div>{this.mappedCountries(this.props.countries.countriesFound)}</div>
            </div>
            )
    }
}

function mapStateToProps(state){
    return{
        countries: state.countries
    }
}

export default connect(mapStateToProps, null)(CountriesList)