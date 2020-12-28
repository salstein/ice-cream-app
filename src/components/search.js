import React from 'react'
import Cart from '../images/cart.svg'
import search from '../images/search.svg'
import {NavLink} from 'react-router-dom'

const Search = () => {
    return (
        <div>
            <div className='searchComponents'>
                <div className='searchInput'>
                    <input type='search'/>
                    <img id='searchIcon' src={search} />
                </div>
                <NavLink to='/app/cart'>
                    <div className='cartIcon'>
                        <img src={Cart} />
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Search