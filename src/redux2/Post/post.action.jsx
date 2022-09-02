import axios from "axios"

const Post_Req="Post_Req"
const Post_Success="Post_Success"
const Post_Failure="Post_Failure"

let Post_Req_Action=()=>{
    return {type:Post_Req}
}
let Post_Success_Action=(Post_data)=>{
    return {type:Post_Success, payload:Post_data}
}
let Post_Failure_Action=()=>{
    return {type:Post_Failure}
}
let Get_Data_Action=()=>{
    return (dispatch)=>{
        dispatch(Post_Req_Action());

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{dispatch(Post_Success_Action(res.data))})
        .catch((dispatch)=>{dispatch(Post_Failure_Action())})
            
     
    }
}
export {Post_Req,Post_Success,Post_Failure,Get_Data_Action}