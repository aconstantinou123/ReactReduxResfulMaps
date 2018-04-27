import React from 'react'
import { Link } from 'react-router-dom'

const Country = ({ country }) => {
    return (
        <Link to={`/country/${country.alpha3Code}`} className='country_item'>
            <div className='left'>
                <img src={country.flag} alt={country.name}/>
            </div>
            <div className='right'>
                <h4>{country.name}</h4>
            </div>
        </Link>
    )
}

export default Country