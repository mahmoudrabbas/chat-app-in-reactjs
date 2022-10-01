import React from 'react'

const Input = () => {
    return (
        <form className='input'>
            <input type='text' placeholder='Type your message' /> 

            <div className='btns'>

                <img src='attachment.jpg' alt='' width={20} height={20} />

                <input type='file' id='addimg' className='d-none' />

                <label htmlFor='addimg'>
                    <img src='addimg.png' alt='' width={20} height={20} />
                </label>
                
                <button className='btn btn-secondary ms-2' type='submit'>Send</button>
            </div>
        </form>
    )
}

export default Input