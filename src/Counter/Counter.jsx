
import { useDispatch, useSelector } from 'react-redux/es/exports'; 
import {incrAction,decrAction} from '../redux2/Counter/counter.action'
const Counter = () => {
 let x=useSelector((state)=>{
  return state.count
 })
 
  let dispatch=useDispatch();
 let incrHandler=()=>{
  dispatch(incrAction())
 }
 let decrHandler=()=>{
   dispatch(decrAction())
 }
 
  return (
    <div>
      <h1>Counter example:{x}</h1>
      <button onClick={incrHandler}>+</button>
      <button onClick={decrHandler}>-</button>
    </div>
  );
}

export default Counter;

