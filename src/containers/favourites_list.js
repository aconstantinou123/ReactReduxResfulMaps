import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFavourites } from '../actions/favourites_action'
import { Link } from 'react-router-dom'
import Country from '../components/country'
import { logout } from '../utils/AuthService';

class FavouritesList extends Component {

    componentWillMount(){
        this.props.getFavourites()
        console.log(this)
    }

    mapCountries = (favouriteCountries) => {
        if(!this.props.favourites.favouritesNotFound){
            return favouriteCountries.map(country => {
                return <Country key={country.alpha3Code} country={country}/>
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
    return bindActionCreators({ getFavourites }, dispatch)
}

function mapStateToProps(state){
    return{
        favourites: state.favourites
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesList)