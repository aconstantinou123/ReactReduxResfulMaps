import React from 'react'
import { Link } from 'react-router-dom'

const Country = ({ country }) => {

    return (
        <div className='country_item'>
            <div className='left'>
            <Link to={`/country/${country.alpha3Code}`}>
                <img src={country.flag} alt={country.name}/>
            </Link>
            </div>
            <div className='right'>
                <div>
                    <h4>{country.name}</h4>
                    <h4>{country.region}</h4>
                </div>
            </div>
        </div>
    )
}

export default Country