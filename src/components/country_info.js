import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showCountryInfo, clearCountryInfo } from '../actions/country_action'
import { Link } from 'react-router-dom'
import { GoogleMapContainer } from './google_map_container';
import { addToFavourites, getFavourites } from '../actions/favourites_action'

class CountryInfo extends Component {


    componentWillMount(){
       this.props.getFavourites()
       this.props.showCountryInfo(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearCountryInfo()
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.id !== prevProps.match.params.id){
            this.props.showCountryInfo(this.props.match.params.id)
        }
     }

    countryListUpdated(){
        getFavourites()
        return <div>{this.props.favourites.favouriteCountries.length}</div>
    }

    checkNativeName(countryInfo){
        if(countryInfo.name !== countryInfo.nativeName){
            return countryInfo.nativeName
        }
    }

    handleClick(){
        this.props.addToFavourites(this.props.countryInfo)
        this.props.getFavourites()
        console.log(this.props.favourites.favouriteCountries)
    }

    renderCountryInfo(countryInfo){
        if(countryInfo){
        return(
        <div className='country_info'>
            <div className='left'>
                <h1>{countryInfo.name}</h1>
                <h2>{this.checkNativeName(countryInfo)}</h2>
                <img src={countryInfo.flag} alt={countryInfo.alpha2Code}/>
                <h5>Population: {countryInfo.population}</h5>
                <h5>Region: {countryInfo.region}</h5>
                <h6>Country Information</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h5>Links to border countries:</h5>
                <h5>{this.mapBoarderCountrys(countryInfo)}</h5>
                <button className='favourites-button' onClick={this.handleClick.bind(this)}>Add To Favourites</button>
                <div>{this.props.favourites.favouriteCountries.length}</div>
                <div className='home_link'>
                    <Link to={'/'}>Home</Link>
                </div>
            </div>
            <div className='right'>
                <GoogleMapContainer className='map_container'countryInfo={this.props.countryInfo}/>
            </div>
        </div>
        )
        }
    }

    mapBoarderCountrys(countryInfo){
        if(countryInfo.borders){
        return countryInfo.borders.map(borderCountry => {
           return <Link key={borderCountry} to={`/country/${borderCountry}`}
           >{borderCountry}{"\n"}</Link>
            })
        }
    }

    render(){
        return(
            <div>
            {this.renderCountryInfo(this.props.countryInfo)}
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
   return bindActionCreators({ showCountryInfo, clearCountryInfo, addToFavourites, getFavourites }, dispatch)
}

function mapStateToProps(state){
    return {
        countryInfo: state.countries.countryInfo,
        favourites: state.favourites
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryInfo)