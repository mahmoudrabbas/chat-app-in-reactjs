import React from 'react'
import Chats from './chats';
import Navbarr from './navbar';
import Search from './search';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Navbarr />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar