import React, { Component } from 'react'
import { connect } from 'react-redux'
import Country from '../components/country';
import VideoPlayer from '../components/video_player';

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
        console.log(this.props.countries.countriesFound)
        if(this.props.countries.countriesFound.length !== 0){
           return(
            <div>
                <div>{this.mappedCountries(this.props.countries.countriesFound)}</div>
            </div>
            )
        }
        else return (
            <VideoPlayer/>
        )
    }
}

function mapStateToProps(state){
    return{
        countries: state.countries
    }
}

export default connect(mapStateToProps, null)(CountriesList)