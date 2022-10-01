import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from './../config/firebase';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
    const [errMsg, setErrMsg] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target[0].value; 
        const email = e.target[1].value; 
        const password = e.target[2].value; 
        const profilePic = e.target[3].files[0]; 
        
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, fullName);
            const uploadTask = uploadBytesResumable(storageRef, profilePic);
            uploadTask.on((error) => {
                setErrMsg(true)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                    await updateProfile(res.user, { 
                        displayName: fullName,
                        photoURL: downloadURL
                    })
                })
            })
            
        } catch (error) {
            setErrMsg(true);
        }


    } 

    return (
        <div className='page'>
            <div className='form-container'>
                <h5>Register In TanTan</h5>
                <form onSubmit={handleSubmit}>
                    {errMsg? (
                        <p className='alert alert-danger'>There is something went wrong!</p>
                    ) : ""}
                    <input type='text' name='name' placeholder='Enter your full name' />
                    <input type='email' name='email' placeholder='Enter your email' />
                    <input type='password' name='password' placeholder='Enter your password' />
                    <input type='file' name='avtar' id='avatar'/>
                    <label htmlFor='avatar' >
                        <img src='addimg.png' alt='' width={20} height={20} style={{verticalAlign:"center"}} />
                        <p>Upload Profile Picture</p>
                    </label>
                    <button type='submit'>Register</button>
                    
                    <p>Already have an account? <Link to='/login'>Login</Link></p>

                </form>
            </div>
        </div>
    )
}

export default Register