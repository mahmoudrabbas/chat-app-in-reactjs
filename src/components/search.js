import React from 'react'
import User from './user';

const Search = () => {
    return (
        <div className='search'>
            <input type='text' placeholder='find a user' />
            <User />
        </div>
    )
}

export default Search