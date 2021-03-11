import React, { useEffect } from 'react';
import { addToCart } from "../actions/cartAction";
import { useDispatch } from "react-redux";

export default function CartScreen (props)  {

    const productId = props.match.params.id;
    const qty = props.history.location.search
        ? Number(props.history.location.search.split('=')[1])
        : 1;

    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [ dispatch, productId, qty ]);

    return (
        <div>
            <h1> Cart Screen </h1>
            <p> ADD TO CARD : ProductID: { productId } Qty: {qty} </p>
        </div>
    )
};
