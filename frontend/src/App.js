import React from 'react';
import './App.sass';
import {NavLink, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
    return (
        <div className="grid-container">
            <header className="row">
                <div><NavLink to="/" className="brand">online shop</NavLink></div>
                <div>
                    <NavLink to="/cart">Cart</NavLink>
                    <NavLink to="/signin">Sign In</NavLink>
                </div>
            </header>
            <main>
                <Route exact path="/product/:id" component={ProductScreen}/>
                <Route exact path="/" component={HomeScreen}/>
            </main>
            <footer className="row center">All right reserved</footer>
        </div>
    );
}

export default App;
