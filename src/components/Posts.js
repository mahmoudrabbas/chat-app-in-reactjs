import React, {useState} from 'react'
import styles from '../App.module.css';
import Form from './Form';
import Post from './Post';
import { useSelector } from 'react-redux';
const Posts = () => {
    const {posts} = useSelector(state => state.posts);
    const [currentId, setCurrentId] = useState(null);
    return (
        <div className={styles.posts}>
            <Form setCurrentId={setCurrentId} currentId={currentId}/>
            <hr className={styles.hr} />
            {posts.length===0? <h3> UNFORTUNATELY THERE IS NO ANY POST!</h3> : posts.map((post) => (
                <Post key={post.id} post={post} setCurrentId={setCurrentId}/>
            ))}
        </div>
    )
}

export default Posts