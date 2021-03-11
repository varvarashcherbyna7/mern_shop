import React from 'react';
import { NavLink } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
    const { product } = props;
    return (
        <div className="card">
            <NavLink to={`/product/${product._id}`}>
                <img className="medium"
                     src={ product.image }
                     alt={ product.name }/>
            </NavLink>
            <div className="card-body">
                <NavLink to={`/product/${product._id}`}>
                    <h2>{ product.name }</h2>
                </NavLink>
                <Rating rating={ product.rating } numReviews={ product.numReviews }/>
                <div className="price">${ product.price }</div>
            </div>
        </div>
    );
}
