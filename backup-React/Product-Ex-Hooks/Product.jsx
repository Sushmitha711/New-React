import React,{useState} from 'react';

const Product = () => {
    let [Product,setProduct]=useState({
        p_id:"P1010",
        P_Name:"Teddy",
        P_Image:"https://rukminim1.flixcart.com/image/416/416/kjlrb0w0-0/stuffed-toy/g/b/k/soft-push-fabric-teddy-bear-with-birthday-balloon-and-fully-original-imafz5349ad4vgmp.jpeg?q=70",
        P_Price:2000,
        P_qty:1,
    })
    let decrHandler=()=>{
        setProduct({...Product,P_qty:Product.P_qty - 1 })
        
    }
    let incrHandler=()=>{
        setProduct({...Product,P_qty:Product.P_qty + 1})
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <table className='table table-hover'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>P_ID</th>
                                <th>P_NAME</th>
                                <th>P_IMAGE</th>
                                <th>P_PRICE</th>
                                <th>P_QTY</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{Product.p_id}</td>
                                <td>{Product.P_Name}</td>
                                <td><img src={Product.P_Image} height="80px"/></td>
                                <td>{Product.P_Price}</td>
                                <td><i className='fa fa-minus-circle' onClick={decrHandler} ></i>{Product.P_qty}<i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
                                <td>{Product.P_qty*Product.P_Price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default Product;
