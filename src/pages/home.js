import React from 'react'
import Chat from '../components/chat';
import Sidebar from '../components/sidebar';
import Register from './register';

const Home = () => {
    return (
        <div className='page'>
            <div className='home-container'>
                <Sidebar />
                <Chat />
            </div>
            {/* <Register /> */}
        </div>
    )
}

export default Home