import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { incrAction,decrAction } from '../redux2/Product/product.action';

const Product = () => {
    let dispatch=useDispatch();
let products=useSelector((state)=>{
    return state.product
})

    return (
        
        <div className='container'>
            <h1>PRODUCT EXAMPLE</h1>
            <div className='row'>
                <div className='col-md-12'>
                    <table className='table table-hover'>
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
                                <td>{products.P_Name}</td>
                                 <td>{<img src={product.P_Image}/>}</td> 
                                <td>{products.P_Price}</td>
                                <td><i className='fa fa-plus-circle' onClick={()=>{dispatch(incrAction())}}></i>{products.P_Qty}<i className='fa fa-minus-circle' onClick={dispatch(decrAction())}></i></td>
                                <td>{products.P_Qty*products.P_Price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
}

export default Product;
