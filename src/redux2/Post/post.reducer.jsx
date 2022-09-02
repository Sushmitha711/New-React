import { Post_Req, Post_Success, Post_Failure } from "./post.action";
let initialState={
    post:[],
    loading:true
}

const PostReducer = (state=initialState,action) => {
   switch (action.type){
    case 'Post_Req':
        return {...state, loading:true}
    case 'Post_Success':
        return {...state, post:action.payload} 
    case 'Post_Failure':
        return {...state, loading:true}  
    default :
        return state;    
   }

}

export {PostReducer}
