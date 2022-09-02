import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { incr_Action,decr_Action } from '../redux2/Product/product.action';

const Product = () => {

    let dispatch=useDispatch();

   let product=useSelector((state)=>{
    return state.product
   })

    return (
        
        <div className='container'>
            <h1>PRODUCT EXAMPLE</h1>
            <div className='row'>
                <div className='col-md-12'>
                 {   <table className='table table-hover'>
                        <thead className='bg-success text-white'>
                            <tr>
                                <th>NAME</th>
                                <th>IMAGE</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.P_Name}</td>
                                 <td>{<img src={product.P_Image} height="100px"/>}</td> 
                                 <td>{product.P_Price}</td>
                                 <td><i className='fa fa-plus-circle' onClick={()=>{dispatch(incr_Action())}}></i>{product.P_Qty}<i className='fa fa-minus-circle' onClick={  ()=>{ dispatch(decr_Action()) } }></i></td>
                                <td>{product.P_Qty*product.P_Price}</td>  
                            </tr>
                        </tbody>
                    </table> }
                </div>
            </div>
            
        </div>
    );
}

export default Product;
