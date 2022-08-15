import React from 'react'
import styles from '../App.module.css';
import { useDispatch } from 'react-redux';
import {deletePost} from '../REDUX/postsSlice';

const Post = ({post, setCurrentId}) => {

    const dispatch = useDispatch();

    return (
        <div className={styles.post}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <hr className={styles.hr} />
            <button className={styles.btn} onClick={() => setCurrentId(post.id)}>EDIT</button> <b />
            <button className={styles.btn} onClick={() => dispatch(deletePost(post.id))}>DELETE</button>
        </div>
    )
}

export default Post