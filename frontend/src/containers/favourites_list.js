import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'


import { getFavourites, deleteFavourite } from '../actions/favourites_action'
import { logout } from '../utils/AuthService';
import FavouriteCountry from '../components/favourite_country';

class FavouritesList extends Component {

    componentWillMount(){
        this.props.getFavourites()
        console.log(this)
    }

    mapCountries = (favouriteCountries) => {
        if(!this.props.favourites.favouritesNotFound){
            return favouriteCountries.map(country => {
                return <FavouriteCountry key={country.alpha3Code} country={country} deleteFavourite={this.props.deleteFavourite}/>
             })
        }
        else {
            return <h1 className='no-favourites'>No bucket list found!</h1>
        }
    }
    

    render(){
        return(
            <div>
                <div className='home-link'>
                    <Link to='/home'>Home</Link>
                    <Link to='/my_trips'>My Trips</Link>
                    <Link onClick={logout} className='log-out-link' to='/'>Log out</Link>
                </div>
                <div className='favourites_title'>
                    <h1>My Bucket List</h1>
                </div>
                <div>
                    <div>{this.mapCountries(this.props.favourites.favouriteCountries)}</div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getFavourites, deleteFavourite }, dispatch)
}

function mapStateToProps(state){
    return{
        favourites: state.favourites
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesList)