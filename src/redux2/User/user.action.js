import axios from "axios";

const USER_REQ="USER_REQ";
const USER_SUCCESS="USER_SUCCESS";
const USER_FAILURE="USER_FAILURE";

let user_req_Action=()=>{
    return {type:USER_REQ}
}
let user_success_Action=(user)=>{
    return {type:USER_SUCCESS,payload:user}
}
let user_failure_Action=()=>{
    return {type:USER_FAILURE}
}
let GetdataAction=()=>{
return (dispatch)=>{
    dispatch(user_req_Action());
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{dispatch(user_success_Action(response.data))})
    .catch(()=>{dispatch(user_failure_Action())})
}
}
export {USER_REQ,USER_SUCCESS,USER_FAILURE,GetdataAction}