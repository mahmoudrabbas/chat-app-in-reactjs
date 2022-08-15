import React, { useEffect, useRef, useState } from 'react'
import styles from '../App.module.css';
import { addPost, updatePost } from '../REDUX/postsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Form = ({setCurrentId, currentId}) => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    
    const initialPost = { title:"", description:"", id:0 };
    
    const [post, setPost] = useState(initialPost);
    
    const {posts} = useSelector(state => state.posts);
    const editingPost = posts[currentId] || null;

    useEffect(() => {
        if(editingPost) setPost(editingPost);
    }, [editingPost])


    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId != null) {
            dispatch(updatePost({currentId, post}))
            setCurrentId(null)
        }else{
            dispatch(addPost({ ...post, id:posts.length }));
        }
        setPost({ ...initialPost });
        inputRef.current.focus();
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className='input-group'>
                <input 
                    ref={inputRef} 
                    className={styles.inputs} 
                    type={'text'} placeholder="Post Title" 
                    onChange={(e) => setPost({ ...post, title: e.currentTarget.value })} 
                    value={post?.title} />
            </div>
            <div className='input-group'>
                <input 
                    className={styles.inputs} 
                    type={'text'} placeholder="Post Description" 
                    onChange={(e) => setPost({ ...post, description: e.currentTarget.value })} 
                    value={post?.description} />
            </div>
            <div className='input-group'>
                <input 
                    className={styles.inputs} 
                    type={'submit'} 
                    value={currentId === null? "POST" : "UPDATE"} />
            </div>
        </form>
    )
}

export default Form