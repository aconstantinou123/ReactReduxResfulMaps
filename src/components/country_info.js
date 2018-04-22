import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showCountryInfo, clearCountryInfo } from '../actions/country_action'
import { toggleModalOpen }from '../actions/my_trips_action'
import { Link } from 'react-router-dom'
import { GoogleMapContainer } from './google_map_container';
import { addToFavourites, getFavourites, clearAddedToFavourites } from '../actions/favourites_action'
import { ToastContainer, toast } from 'react-toastify'
import { css } from 'glamor';
import AddToTripsModal from './add_to_trips_modal';

class CountryInfo extends Component {

    componentWillMount(){
        this.props.clearAddedToFavourites()
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
        if(this.props.favourites.favouriteAdded === true){
            this.notify()
            this.props.clearAddedToFavourites()
        }
        else if(this.props.favourites.favouriteAdded === false){
            this.notify()
            this.props.clearAddedToFavourites()
        }
     }

     notify(){
        console.log(this.props.favourites.favouriteAdded)
        if(this.props.favourites.favouriteAdded){
        toast.info("Added To Favourites!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: css({
                background: '#d59563',
                borderRadius: '10px'
              })
          });
        }
        else{
            toast.info("Already in Favourites", {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: css({
                    background: 'red',
                    borderRadius: '10px'
                  })
              });
        }
     }

    checkNativeName(countryInfo){
        if(countryInfo.name !== countryInfo.nativeName){
            return countryInfo.nativeName
        }
    }

    handleClick(){
        this.props.addToFavourites(this.props.countryInfo)
        console.log(this.props.favourites.favouriteCountries)
    }

    handleAddToTripsClick(){
        this.props.toggleModalOpen()
    }

    renderCountryInfo(countryInfo){
        if(countryInfo){
        return(
        <div>
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
                    <button className='favourites-button' onClick={this.handleAddToTripsClick.bind(this)}>Add To My Trips</button>
                    <ToastContainer hideProgressBar={true} autoClose={3000}/>
                    <div className='home_link'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/my_trips'}>My Trips</Link>
                        <Link to={'/favourites'}>Favourites</Link>
                    </div>
                </div>
                <div className='right'>
                    <GoogleMapContainer className='map_container'countryInfo={this.props.countryInfo}/>
                </div>
            </div>
            <AddToTripsModal toggleModal={this.handleAddToTripsClick.bind(this)}/>
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
   return bindActionCreators({ showCountryInfo, clearCountryInfo, addToFavourites, getFavourites, clearAddedToFavourites, toggleModalOpen }, dispatch)
}

function mapStateToProps(state){
    return {
        countryInfo: state.countries.countryInfo,
        favourites: state.favourites,
        myTrips: state.myTrips
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryInfo)