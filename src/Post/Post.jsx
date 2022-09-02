import React from 'react';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Get_Data_Action} from '../redux2/Post/post.action'
const Post = () => {
    let Posts=useSelector((state)=>{
         return state.post
    })
    let dispatch=useDispatch();
    useEffect(() => {
   dispatch(Get_Data_Action())
   }, []);
   
   
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <h2>Post Example using useeffect hook</h2>
                    <pre>{JSON.stringify(Posts)}</pre>
                    <pre>{JSON.stringify(Posts.post.userId)}</pre>
                </div>
            </div>
            
        </div>
    );
}

export default Post;
