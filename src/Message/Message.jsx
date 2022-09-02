import React from 'react'
import { gmAction, gnAction } from '../redux2/Message/message.action'
import { useDispatch, useSelector } from 'react-redux'
const Message = () => {
    let x = useSelector((state) => {
        return state.message;
    })
    let dispatch = useDispatch();
    let gmHandler = () => {
        dispatch(gmAction())
    }
    return (
        <div>
            <h1>Message Example:{x.msg}</h1>
            {/* <pre>{JSON.stringify(x)}</pre> */}
            <button onClick={gmHandler}>GM</button> &nbsp;&nbsp;
            <button onClick={() => { dispatch(gnAction()) }}>GN</button>
        </div>
    )
}

export default Message
