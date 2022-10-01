import React from 'react'

const Navbarr = () => {
    return (
        <div className='navbar'>
            <div className='logo'>Tantan</div>
            <div className='user-container'>
                <div className='user'>
                    <img className='rounded-circle' src='https://manforhimself.com/wp-content/uploads/2020/08/mens-hairstyle-medium-length-haircut-grooming-MFH28-man-for-himself-600x600.jpg' alt='' width={30} height={30} />
                    <span className='display-name text-sm ms-2'>John</span>
                </div>
                <button className='logout btn btn-danger btn-sm ms-2'>Logout</button>
            </div>
        </div>
    )
}

export default Navbarr;