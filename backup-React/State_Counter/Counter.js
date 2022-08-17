import React from "react";
class Counter extends React.Component{
   state={
    Id:1,
    name:"Liquortees Big Ear Bunny Teddy Bear Soft Toy Home & Car Decoartion Toy - 40 cm  (Pink)",
    price:649,
    image:"https://rukminim1.flixcart.com/image/416/416/l5fnhjk0/stuffed-toy/3/w/w/big-ear-bunny-teddy-bear-soft-toy-home-car-decoartion-toy-40-original-imagg484gwdwygct.jpeg?q=70",
    qty:1,
}
   incrHandler=()=>{
    this.setState({qty:this.state.qty+1})
   }
   decrHandler=()=>{
    this.setState({qty:this.state.qty-1})
   }
   
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                     <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.Id}</td>
                                <td>{this.state.name}</td>
                                <td><img src={this.state.image} height="200" alt="first"/></td>
                                <td><i className="fa-solid fa-plus" onClick={this.incrHandler}>&nbsp;&nbsp;&nbsp;</i>{this.state.qty}&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-minus" onClick={this.decrHandler}></i></td>
                                <td>{this.state.qty* this.state.price}</td>
                            </tr>
                        </tbody>
                     </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Counter