import React from 'react';
import './App.sass';
import {NavLink, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import {useSelector} from "react-redux";

function App() {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    return (
        <div className="grid-container">
            <header className="row">
                <div><NavLink to="/" className="brand">online shop</NavLink></div>
                <div>
                    <NavLink to="/cart">Cart
                        {
                            cartItems.length > 0 && (
                            <span className="badge">{ cartItems.length }</span>)
                        }
                    </NavLink>
                    <NavLink to="/signin">Sign In</NavLink>
                </div>
            </header>
            <main>
                <Route path="/cart/:id?" component={ CartScreen }/>
                <Route exact path="/product/:id" component={ ProductScreen }/>
                <Route exact path="/" component={ HomeScreen }/>
            </main>
            <footer className="row center">All right reserved</footer>
        </div>
    );
}

export default App;
