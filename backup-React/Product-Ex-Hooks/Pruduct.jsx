import React, { Component } from 'react';

class Pruduct extends Component {
    constructor(props){
        super(props)
        this.state={
            p_id:"P1010",
            P_Name:"Teddy",
            P_Image:"https://rukminim1.flixcart.com/image/416/416/kjlrb0w0-0/stuffed-toy/g/b/k/soft-push-fabric-teddy-bear-with-birthday-balloon-and-fully-original-imafz5349ad4vgmp.jpeg?q=70",
            P_Price:2000,
            P_qty:1,
        }
    }
    incrHandler=()=>{
        this.setState({P_qty:this.state.P_qty+1})
    }
    decrHandler=()=>{
        this.setState({P_qty:this.state.P_qty-1})
    }
    render() {
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
                                    <td>{this.state.p_id}</td>
                                    <td>{this.state.P_Name}</td>
                                    <td><img src={this.state.P_Image} height="80px"/></td>
                                    <td>{this.state.P_Price}</td>
                                    <td><i className='fa fa-minus-circle' onClick={this.decrHandler} ></i>{this.state.P_qty}<i className='fa fa-plus-circle' onClick={this.incrHandler}></i></td>
                                    <td>{this.state.P_qty*this.state.P_Price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pruduct;
