import React from "react";
import './ProductCard.css';
import { Link } from "react-router-dom";
function ProductCard({id,name,price,description,image}){
    return(
        <div className="Product-card">
            <img src={image} alt={name} className="product-card-img"/>
            <h2 className="product-name">{name}</h2>
            <h1 className="product-price">₹{price}</h1>
            <p className="product-desc">{description}</p>
        <Link className="btn-buynow" to={`/buy/${id}`}>Buy Now</Link>
        </div>
    )
}
export default ProductCard