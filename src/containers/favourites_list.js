import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFavourites } from '../actions/favourites_action'
import Country from '../components/country'

class FavouritesList extends Component {

    componentWillMount(){
        this.props.getFavourites()
    }

    componentDidUpdate(){
        console.log(this.props.favourites.favouriteCountries)
    }

    mapCountries = (favouriteCountries) => {
        if(!this.props.favourites.favouritesNotFound){
            return favouriteCountries.map(country => {
                return <Country key={country.alpha3Code} country={country}/>
             })
        }
        else {
            return <h1 className='no-favourites'>No favourites found!</h1>
        }
    }
    

    render(){
        return(
            <div>
                <div className='favourites_title'>
                    <h1>My Favourite Countries</h1>
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