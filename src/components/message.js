import React from 'react'

const Message = () => {
    return (
        <div className='message' >
            <div className='msg-info m-2 d-flex flex-column'>
                <img className='rounded-circle' src='https://manforhimself.com/wp-content/uploads/2020/08/mens-hairstyle-medium-length-haircut-grooming-MFH28-man-for-himself-600x600.jpg' alt='' width={35} height={35} />
                <span style={{fontSize: "12px", color:"#eee", marginTop:"5px"}}>Just now</span>
            </div>
            <div className='msg-content'>
                <p className='mb-1'>
                    Hello, how you doing? Can I know how is it going so far? dude what's your name
                </p>
                {/* <img className='sendimg' src='https://manforhimself.com/wp-content/uploads/2020/08/mens-hairstyle-medium-length-haircut-grooming-MFH28-man-for-himself-600x600.jpg' alt='' width={"50%"} height={"50%"} /> */}
            </div>
        </div>
    )
}

export default Message