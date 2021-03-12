import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import MessageBox from "../components/MessageBox";
import {addToCart} from "../actions/cartAction";
import {useDispatch, useSelector} from "react-redux";

export default function CartScreen(props) {

    const productId = props.match.params.id;
    const qty = props.history.location.search
        ? Number(props.history.location.search.split('=')[1])
        : 1;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = id => {
        // delete action

    }

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }

    return (
        <div className="row top">
            <div className="col-2">
                <h1>Shopping Cart</h1>
                {
                    cartItems.length === 0
                        ? <MessageBox>Cart is empty. <NavLink to="/">Go Shopping</NavLink></MessageBox>
                        :
                        (
                            <ul>
                                {cartItems.map((item) => (
                                    <li key={item.product}>
                                        <div className="row">
                                            <div>
                                                <img src={item.image}
                                                     alt={item.image}
                                                     className="small"
                                                />
                                            </div>
                                            <div className="min-30">
                                                <NavLink to={`/product/${item.product}`}>
                                                    {item.name}
                                                </NavLink>
                                            </div>
                                            <div>
                                                <select value={item.qty}
                                                        onChange={e => {
                                                            return dispatch(
                                                                addToCart(item.product, Number(e.target.value)))
                                                            }
                                                        }
                                                >
                                                    {
                                                        [...Array(item.countInStock).keys()].map(
                                                            (x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))
                                                    }
                                                </select>
                                            </div>
                                            <div>${item.price}</div>
                                            <div>
                                                <button type="button"
                                                        onClick={() => removeFromCartHandler(item.product)}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                }
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal (
                                {
                                    cartItems.reduce((a, c) => a + c.qty, 0)} items)
                                : ${cartItems.reduce((a, c) => a + (c.price * c.qty), 0)
                            }
                            </h2>
                        </li>
                        <li>
                            <button type="button"
                                    onClick={checkoutHandler}
                                    className="primary block"
                                    disabled={cartItems.length === 0}
                            >
                                Proceed to Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
