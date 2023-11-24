import React,{useEffect, useState} from "react";
import './Myorders.css'
import axios from "axios";
function Myorders(){

const [orders, setOrders]=React.useState([]);

const fetchOrders=async()=>{
const user=JSON.parse(localStorage.getItem("user"))||null;
const response=await axios.get(`/orders?id=${user._id}`)

setOrders(response?.data?.data);
}

useEffect(()=>{
fetchOrders();
},[]);

    return(
        <div>
        <h1 className="text-center"> My Orders</h1>
        {
            orders?.map((order,index)=>{
                const{product,Quantity,shippingAddress}=order;
                return(<div key={index} className="order-card">
                    <h2>{product.name}</h2>
                    <p> Quantity:{Quantity}</p>
                    <p>Price:{product.price}</p>
                    <p>Total Amount:{product.price * Quantity}</p>
                    <p>Shipping Address:{shippingAddress}</p>
                </div>)
            })
        }
        </div>
    )
}
export default Myorders