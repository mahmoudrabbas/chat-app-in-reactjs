import React from 'react'
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <div className='page'>
            <div className='form-container'>
                <h5>Login In TanTan</h5>
                <form>
                    <input type='email' name='email' placeholder='Enter your email' />
                    <input type='password' name='password' placeholder='Enter your password' />
                    <button type='submit'>Login</button>
                    <p>Do Not Have an account? <Link to='/register'>Register</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login