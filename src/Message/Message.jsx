import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { gmAction, gnAction } from '../redux2/Message/message.action'
const Message = () => {
    let y = useSelector((state) => {
       // return state.message;
        console.log(state.message)
    })
    let dispatch = useDispatch()
    let gmHandler = () => {
        dispatch(gmAction())
    }
    let gnHandler = () => {
        dispatch(gnAction());
    }
    return (
        <div>
             <h1>Message Component:{y}</h1> 
            {/* <pre>{JSON.stringify(y)}</pre>  */}
            <button onChange={gmHandler()}>GM</button>
            <button onChange={gnHandler()}>GN</button>
        </div>
    )
}

export default Message