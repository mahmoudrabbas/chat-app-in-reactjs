import React from 'react'
import Messages from './messages';
import Input from './input';

const Chat = () => {
    return (
        <div className='chat'>
            <div className='navbar'>
                <span className='username'>@username</span>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat